export default {
    name: 'cart',
    title: 'Cart',
    type: 'document',
    fields: [
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{type: 'user'}],
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{type: 'product'}],
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            },
          ],
        }],
      },
    ],
  }
  