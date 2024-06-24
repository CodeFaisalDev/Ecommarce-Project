import React from 'react';
import Card from './Card';  // Make sure the import path is correct
import { client } from '../../sanity/lib/client';

const WomensProducts = async () => {
  const womensProducts = await client.fetch(`*[_type == "product" && category._ref == "d242d718-3940-467a-a55b-4ff866580b77"]`);

  return (
    <div className='flex min-h-screen max-sm:max-w-screen flex-col items-center justify-between mt-10 md:mt-20'>
        <div>
            <h1 className='text-3xl font-bold'>
                Womens Products
            </h1>
        </div>
      <div className="max-sm:w-96 flex flex-row gap-6 flex-wrap justify-center m-10">
        {womensProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default WomensProducts;
