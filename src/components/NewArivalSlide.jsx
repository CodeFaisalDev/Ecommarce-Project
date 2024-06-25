import React from "react";
import Card from "./Card";
import { client } from "../../sanity/lib/client";

const NewArivalSlide = async () => {
  const newArivals = await client.fetch(`*[_type == "product"] | order(_createdAt desc) [4...8]`)

  return (
    <div className="justify-center m-10 md:m-20">
      <div className="m-10">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
      </div>

      {/* For Desktop */}
      <div className="hidden md:flex flex-row gap-4 flex-wrap justify-center m-10">
        {newArivals.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>

      {/* For Mobile */}
      <div className="flex flex-col md:hidden w-screen md:m-10">
        <div className="carousel carousel-center rounded-box">
          {newArivals.map((product, index) => (
            <div key={index} className="carousel-item">
              <Card key={index} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArivalSlide;
