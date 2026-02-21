"use client";

import SmokeyBackground from '@/components/SmokeyBackground';
import LoginForm from '@/components/LoginForm';

/**
 * A glassmorphism-style login page component with animated labels and Google login.
 */
export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
      <SmokeyBackground />
      <LoginForm />
    </div>
  );
}
