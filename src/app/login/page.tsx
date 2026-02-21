"use client";

import SmokeyBackground from "@/components/SmokeyBackground";
import LoginForm from "@/components/LoginForm";

/**
 * A glassmorphism-style login page component with animated labels and Google login.
 */
export default function LoginPage() {
  return (
    <div className="fixed inset-0 z-10 w-screen h-screen overflow-hidden">
      <SmokeyBackground />
      <div className="relative z-20 h-full w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <LoginForm />
      </div>
    </div>
  );
}
