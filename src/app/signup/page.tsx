"use client";

import SmokeyBackground from '@/components/SmokeyBackground';
import SignUpForm from '@/components/SignUpForm';

/**
 * Signup page component with glassmorphism background.
 */
export default function SignUpPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <SmokeyBackground />
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <SignUpForm />
      </div>
    </div>
  );
}
