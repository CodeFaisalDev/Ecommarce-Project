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
    <div className="flex min-h-screen max-sm:max-w-screen flex-col items-center justify-items-center mx-36">
      <div className="flex max-sm:flex-col w-full max-sm:w-screen">
        <div className="grid w-full h-screen flex-grow card rounded-box place-items-center">
          <Image
            src={imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex max-sm:h-fit max-sm:m-5 max-sm:-mt-10 max-sm:w-[90vw] gap-7 h-[80vh] w-full flex-grow card rounded-box place-items-start justify-center">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-md font-light text-justify">
            {product.description}
          </p>
          <div>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
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
