import { DEMO_MODE } from "@/utils/demoMode";
import { errorResponse } from "./response";

/**
 * Check if operation is blocked in demo mode
 * Returns error response if blocked, null if allowed
 */
export const checkDemoMode = () => {
  if (DEMO_MODE) {
    return errorResponse("Demo mode - Create/Update/Delete operations are disabled");
  }
  return null;
};

/**
 * Check authentication
 * Returns error response if not authenticated, null if authenticated
 */
export const checkAuth = (user: any) => {
  if (!user) {
    return errorResponse("Not authenticated");
  }
  return null;
};
