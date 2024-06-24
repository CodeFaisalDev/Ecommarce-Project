import React from "react";
import { client, urlFor } from "../../sanity/lib/client";
import SingleProductPage from "./SingleProducPage";

const SingleProduct  = async ({ params }) => {
  const { slug } = params;
  const product = await client.fetch(
    `*[_type == "product" && _id == "${slug}"][0]`
  );
  const imageUrl = product && product.image ? urlFor(product.image).url() : null;

  // console.log("Image: ", imageUrl);
  return <SingleProductPage product={product} imageUrl={imageUrl} />;
};

export default SingleProduct;
