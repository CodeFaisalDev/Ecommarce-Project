import { urlFor } from "../../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./Loading";

const Card = ({ product }) => {
  const imageUrl = product.image ? urlFor(product.image).url() : null;

  return (
    <div className=" max-sm:w-screen">
      <div className="card card-compact md:w-96 sm:w-screen bg-base-100 shadow-xl">
        <figure className="w-full h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            width={500}
            height={500}
            style={{ width: "auto", height: "auto" }}
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.desc}</p>
          <div className="flex justify-between mt-5">
            <div className="card-actions justify-start mt-2">
              <span className="text-xl ">{product.price}$</span>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Suspense fallback={<Loading />}>
                  <Link href={`/${product._id}`}>Buy Now</Link>
                </Suspense>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
