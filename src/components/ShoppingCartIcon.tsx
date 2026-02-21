'use client'
import React from 'react'
import { ShoppingCart } from 'lucide-react'

interface ShoppingCartIconProps {
  className?: string;
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ className = "" }) => {
  return (
    <ShoppingCart 
      className={`w-5 h-5 transition-colors duration-300 ${className}`} 
    />
  )
}

export default ShoppingCartIcon