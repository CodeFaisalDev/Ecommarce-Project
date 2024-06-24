import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { cart } = await request.json();

    const transformedItems = cart.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.imageUrl], // Add product image
        },
        unit_amount: Math.round(item.price * 100), // Convert price to cents
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: transformedItems,
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/success`,
      cancel_url: `${request.headers.get('origin')}/cancel`,
    });

    console.log('Stripe session created:', session);

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Error creating Stripe session:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
