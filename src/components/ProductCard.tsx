"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const { addToCart } = useCartStore();

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color,
    });
    toast.success("Product added to cart")
  };

  return (
    <div className="w-[280px] sm:w-full h-full shadow-md hover:shadow-lg rounded-lg overflow-hidden flex flex-col transition-all duration-300 bg-white">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`} className="block aspect-square overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center bg-gray-50">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-contain max-w-[90%] max-h-[90%] hover:scale-105 transition-all duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </Link>
      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-2 p-3 sm:p-4 flex-grow">
        <h1 className="font-medium text-sm sm:text-base line-clamp-1">{product.name}</h1>
        <p className="text-xs text-gray-500 line-clamp-2 min-h-[2.5rem]">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-3 text-xs mt-2">
          {/* SIZES */}
          <div className="flex flex-col gap-1 flex-1">
            <span className="text-gray-500 text-xs">Size</span>
            <select
              name="size"
              id="size"
              className="w-full text-xs ring-1 ring-gray-300 rounded px-2 py-1 bg-white"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* COLORS */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-xs">Color</span>
            <div className="flex items-center gap-1">
              {product.colors.map((color) => (
                <div
                  className={`cursor-pointer border-1 ${
                    productTypes.color === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  } rounded-full p-[1.2px]`}
                  key={color}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PRICE AND ADD TO CART BUTTON */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <p className="font-medium text-sm sm:text-base">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="ring-1 ring-gray-200 rounded-md px-3 py-1.5 text-xs sm:text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-1 whitespace-nowrap"
          >
            <ShoppingCart className="w-3 h-3" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;