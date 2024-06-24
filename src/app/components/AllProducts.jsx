import React from 'react';
import Card from './Card';  // Make sure the import path is correct
import { client } from '../../../sanity/lib/client';

const AllProducts = async () => {
  const products = await client.fetch(`*[_type == "product"]`)
  // console.log(products);
  // const productArray = Object.values(products);

  return (
    <div className='flex min-h-screen max-sm:max-w-screen flex-col items-center justify-between mt-10 md:mt-20'>
        <div>
            <h1 className='text-3xl font-bold'>
                All Products
            </h1>
        </div>
      <div className="max-sm:w-96 flex flex-row gap-6 flex-wrap justify-center m-10">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
