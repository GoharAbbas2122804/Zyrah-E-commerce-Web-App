"use client";

import { Suspense } from "react";
import CartPage from "./CartPage";

export default function CartWrapper() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading cart...</div>}>
      <CartPage />
    </Suspense>
  );
}
