export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'orders',
        title: 'Orders',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'order'}]}],
      },
    ],
  }
  