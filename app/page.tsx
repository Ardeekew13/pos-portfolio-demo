"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();

  // Auto-redirect to dashboard for demo mode
  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return null;
};

export default LoginPage;
