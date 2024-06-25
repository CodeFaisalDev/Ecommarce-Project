import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-[80vh] bg-cover bg-[url('/hero.png')]">
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Get The Best Shoes Collection
          </h1>
          <p className="mb-5">
            Experience unparalleled comfort and style with the Nike Air Max 270,
            featuring a large Max Air unit for a smooth ride and a sleek, modern
            design perfect for any occasion.
          </p>
          <button className="btn btn-primary">
            <Link href="/shop">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
