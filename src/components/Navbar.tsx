"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Bell, Home, LogIn } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { cva } from "class-variance-authority";
import { cn } from '@/lib/utils';
import useCartStore from '@/stores/cartStore';

const navButtonVariants = cva(
  "flex items-center justify-center p-2 rounded-full transition-all duration-300",
  {
    variants: {
      variant: {
        default: "text-gray-400 hover:text-gray-800 hover:bg-gray-100",
        outline: "border border-gray-200 hover:border-gray-800 hover:bg-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Navbar = () => {
  const { cart } = useCartStore();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-lg z-[9999] shadow-sm h-16 px-4">
      {/* Left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={36}
          height={36}
          className="h-6 w-6 md:w-9  md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          Zyrah
        </p>
      </Link>



      {/* Right */}
      <div className="flex flex-row items-center gap-6">
        <SearchBar />
        <Link 
        href='/' 
        className={cn(navButtonVariants({ variant: 'default' }), 'group')}
        aria-label="Home"
      >
        <Home className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' />
      </Link>
      
      <button 
        className={cn(navButtonVariants({ variant: 'default' }), 'group relative')}
        aria-label="Notifications"
      >
        <Bell className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
      </button>
      
      <Link 
        href='/cart'
        className={cn(navButtonVariants({ variant: 'default' }), 'group relative')}
        aria-label="Shopping Cart"
      >
        <div className="relative">
          <ShoppingCartIcon className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center text-[10px] font-medium bg-yellow-400 text-gray-800 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </Link>
      
      <Link 
        href="/login"
        className="relative group inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-gray-800 bg-transparent border-2 border-gray-200 rounded-full hover:border-yellow-400 transition-all duration-300 hover:shadow-md hover:bg-yellow-50"
      >
        <span className="relative z-10 flex items-center gap-2">
          <LogIn className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          Sign in
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0 bg-yellow-400 transition-all duration-300 ease-out group-hover:h-full -z-10 rounded-full opacity-0 group-hover:opacity-100"></span>
      </Link>
      </div>

    </nav>

  );
};

export default Navbar;
