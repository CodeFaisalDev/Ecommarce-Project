export default {
    name: 'order',
    title: 'Order',
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
      {
        name: 'total',
        title: 'Total',
        type: 'number',
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            {title: 'Pending', value: 'pending'},
            {title: 'Shipped', value: 'shipped'},
            {title: 'Delivered', value: 'delivered'},
            {title: 'Cancelled', value: 'cancelled'},
          ],
        },
      },
    ],
  }
  