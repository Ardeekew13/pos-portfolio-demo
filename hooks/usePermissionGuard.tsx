"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "@/graphql/auth/me";
import { Query } from "@/generated/graphql";
import { hasPermission, hasAnyPermission } from "@/utils/permissions";
import { DEMO_MODE } from "@/utils/demoMode";
import type { PermissionAction } from "@/utils/permissions";

interface UsePermissionGuardOptions {
  module: string;
  action?: PermissionAction;
  anyActions?: PermissionAction[];
  redirectTo?: string;
}

/**
 * Hook to guard pages based on user permissions
 * Redirects to dashboard if user doesn't have required permission
 * SUPER_ADMIN always has access to all pages
 */
export const usePermissionGuard = ({
  module,
  action,
  anyActions,
  redirectTo = "/dashboard",
}: UsePermissionGuardOptions) => {
  const router = useRouter();
  const { data: meData, loading: meLoading } = useQuery<Query>(ME_QUERY, {
    fetchPolicy: "network-only",
    skip: DEMO_MODE, // Skip query in demo mode
  });
  
  const userPermissions = meData?.me?.permissions || {};
  const userRole = meData?.me?.role;

  useEffect(() => {
    // In demo mode, grant full access to all pages
    if (DEMO_MODE) return;

    // Don't check permissions while loading
    if (meLoading) return;

    // No user data means not authenticated - redirect to login
    if (!meData?.me) {
      router.replace("/");
      return;
    }

    // SUPER_ADMIN has access to everything
    if (userRole === "SUPER_ADMIN") {
      return;
    }

    // Check if user has required permission
    let hasAccess = false;

    if (action) {
      hasAccess = hasPermission(userPermissions, module, action);
    } else if (anyActions && anyActions.length > 0) {
      hasAccess = hasAnyPermission(userPermissions, module, anyActions);
    } else {
      // Default to checking 'view' permission
      hasAccess = hasPermission(userPermissions, module, "view");
    }

    // Redirect if no access
    if (!hasAccess) {
      // Only redirect if redirectTo is provided (not empty string)
      if (redirectTo) {
        router.replace(redirectTo);
      }
    }
  }, [meData, meLoading, userRole, userPermissions, module, action, anyActions, redirectTo, router]);

  // In demo mode, return full access with no loading
  if (DEMO_MODE) {
    return {
      loading: false,
      hasAccess: true,
      userPermissions: {},
      userRole: "SUPER_ADMIN",
    };
  }

  return {
    loading: meLoading,
    hasAccess: userRole === "SUPER_ADMIN" || 
      (action ? hasPermission(userPermissions, module, action) :
       anyActions ? hasAnyPermission(userPermissions, module, anyActions) :
       hasPermission(userPermissions, module, "view")),
    userPermissions,
    userRole,
    user: meData?.me,
  };
};
