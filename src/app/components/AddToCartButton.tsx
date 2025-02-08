'use client';

import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";



export function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();

  return (
    <Button 
      onClick={() => addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      })}
      className='hover:bg-transparent bg-transparent h-16 w-30 border-2 border-gray-700 text-black font-semibold text-xl'
    >
      Add to Cart
    </Button>
  );
}