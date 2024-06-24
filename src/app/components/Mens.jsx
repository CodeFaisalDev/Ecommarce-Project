import React from 'react';
import Card from './Card';  // Make sure the import path is correct
import { client } from '../../../sanity/lib/client';


const MensProducts = async () => {
  const mensProducts = await client.fetch(`*[_type == "product" && category._ref == "658268fe-44ee-4833-bc05-4399f1777d38"]`);

  return (
    <div className='flex min-h-screen max-sm:max-w-screen flex-col items-center justify-between mt-10 md:mt-20'>
        <div>
            <h1 className='text-3xl font-bold'>
                Mens Products
            </h1>
        </div>
      <div className="max-sm:w-96 flex flex-row gap-6 flex-wrap justify-center m-10">
        {mensProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default MensProducts;
