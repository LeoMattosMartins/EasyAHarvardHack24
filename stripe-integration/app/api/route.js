// app/api/create-payment-intent/route.js
import Stripe from 'stripe';

const STRIPE_SECRET_KEY = "YOUR_STRIPE_SECRET_KEY";

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST(req) {
  const { amount } = await req.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
    });
    return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
