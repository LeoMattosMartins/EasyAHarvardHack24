// server.js
const express = require('express');
const app = express();

STRIPE_SECRET_KEY = "sk_test_51QJMO7GYHOIXpGYRw2R3DvTLnQGMqY5BvpNjIZl9IiWb92NWJWVFlTggxSVx7ksZx79b1lWk0PVi6j5hBMssTA0c00sB0rLpUl"

// Check if stripe secret key exists
if (!STRIPE_SECRET_KEY) {
  console.log('STRIPE_SECRET_KEY is null or undefined');
} else {
  console.log('STRIPE_SECRET_KEY:', STRIPE_SECRET_KEY);
}

const stripe = require('stripe')(STRIPE_SECRET_KEY);
app.use(express.static('.'));
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000, // Amount in cents ($10.00)
    currency: 'usd',
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log('Server running on port 4242'));
