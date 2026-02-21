'use client'
import useCartStore from '@/stores/cartStore';
import { ProductType } from '@/types'
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Preahvihear } from 'next/font/google';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


const ProductInteractions = (
    { product, selectedSize, selectedColor }
        :
        { product: ProductType; selectedSize: string; selectedColor: string; }) => {

    const router = useRouter();
    const pathName = usePathname();
    const SearchParams = useSearchParams();
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCartStore();


    const handleQuantityChange = (type: 'increment' | 'decrement') => {
        if (type === 'increment') {
            setQuantity(prev => prev + 1)
        }
        else {
            if (quantity > 1) {
                setQuantity((prev) => prev - 1)
            }
        }
    }


    const handleTypeChange = (type: string, value: string) => {
        const params = new URLSearchParams(SearchParams.toString());
        params.set(type, value);
        router.push(`${pathName}?${params.toString()}`, { scroll: false });

    }

    const handleAddtoCart = () =>{
        addToCart({
            ...product, quantity, selectedColor, selectedSize
        })

        toast.success("Product added to Cart Successfully!")
    }

    return (

        <div className='flex flex-col gap-4 mt-4'>

            {/* Size */}
            <div className='flex flex-col gap-2 text-sm'>
                <span className='text-gray-500'>Size</span>
                <div className='flex items-center gap-2'>

                    {product.sizes.map((size) => (
                        <div className={`cursor-pointer border ${selectedSize === size ? 'border-b-gray-600' : 'border-gray-300'} p-[2px]`}
                            key={size}
                            onClick={() => handleTypeChange('size', size)}
                        >
                            <div className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                {size.toUpperCase()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* COLOR */}
            <div className='flex flex-col gap-2 text-sm'>
                <span className='text-gray-500'>Color</span>
                <div className='flex items-center gap-2'>

                    {product.colors.map((color) => (
                        <div className={`cursor-pointer border ${selectedColor === color ? 'border-b-gray-300' : 'border-white'} p-[2px]`}
                            key={color}
                            onClick={() => handleTypeChange('color', color)}
                        >
                            <div className={`w-6 h-6  `} style={{ backgroundColor: color }} />


                        </div>
                    ))}
                </div>
            </div>



            {/* QUANTITY */}
            <div className='flex flex-col gap-2 text-sm'>
                <span className='text-gray-500 '>Quantity</span>
                <div className='flex items-center gap-2'>
                    <button className='cursor-pointer border border-gray-300 p-1' onClick={() => handleQuantityChange('decrement')}>
                        <Minus className='h-4 w-4' />
                    </button>
                    <span>{quantity}</span>
                    <button className='cursor-pointer border border-gray-300 p-1' onClick={() => handleQuantityChange('increment')}>
                        <Plus className='h-4 w-4' />
                    </button>
                </div>
            </div>


            {/* BUTTONS OF ADD TO CART AND AND BUY THIS ITEM */}

            <button className='bg-gray-800 flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md hover:bg-gray-700 cursor-pointer shadow-lg transition-all duration-300' onClick={()=> handleAddtoCart()}>
                <Plus className='h-4 w-4' />
                Add to Cart
            </button>

            <button className='flex items-center justify-center gap-2 rounded-md  ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2  cursor-pointer '>
                <ShoppingCart className='h-4 w-4' />
                Buy this Item
            </button>
        </div>

    )
}

export default ProductInteractions