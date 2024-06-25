"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

const SingleProductPage = ({ product, imageUrl }) => {
  const { addToCart } = useCart();
  const  [ showToast, setShowToast ]  = useState(false);

  if (!product || !imageUrl) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, imageUrl, quantity: 1 });
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-items-center mx-4 md:mx-36 min-h-screen">
      <div className="flex flex-col md:flex-row w-full md:w-auto">
        <div className="w-full md:w-1/2 h-auto">
          <div className="relative w-full h-0 pb-[75%]"> {/* Adjust ratio here */}
            <Image
              src={imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-box"
            />
          </div>
        </div>
        <div className="divider md:divider-horizontal hidden md:block"></div>
        <div className="flex flex-col justify-center items-start mt-4 md:mt-0 md:ml-8 w-full md:w-1/2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-md font-light text-justify mt-2">
            {product.description}
          </p>
          <button className="btn btn-primary mt-4" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
      {showToast && (
        <div className="toast fixed bottom-5 right-5 z-10">
          <div className="alert alert-info">
            <span>Item added to cart.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
