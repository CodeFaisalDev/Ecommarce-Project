import React from "react";
import { client, urlFor } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const Featured = async () => {
  const featured = await client.fetch(`*[_type == "product"][0]`);
  const imageUrl = featured.image ? urlFor(featured.image).url() : null;

  return (
    <div className="justify-center md:max-w-[80vw] mt-5 md:-mt-5 m-5 ">
      <div>
        <h1 className="text-3xl md:text-center md:mb-10 font-bold mb-5">
          Featured Product
        </h1>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={featured.name}
            width={500}
            height={500}
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{featured.name}</h2>
          <p>{featured.description}</p>
          <div className="card-actions justify-center md:justify-end p-5">
            <button className="btn btn-primary">
              <Link href={`/${featured._id}`}>Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
