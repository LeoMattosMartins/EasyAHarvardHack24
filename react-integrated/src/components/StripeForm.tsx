// app/page.js
'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_test_51QJMO7GYHOIXpGYRHQs0SI0xCYMTEk8YFes0O0rp5yGiC5C4f7jhGAovAoedbzLWrLXwCbtns5SNh4n9Lgu0lyo200jUrqyKOW";

const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      setIsLoading(false);
      return;
    }

    // Create a PaymentIntent with the specified amount
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseFloat(amount) }),
    });

    const { clientSecret, error } = await response.json();

    if (error) {
      setMessage(`Payment failed: ${error}`);
      setIsLoading(false);
      return;
    }

    // Confirm payment with Stripe Elements card information
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (confirmError) {
      setMessage(`Payment failed: ${confirmError.message}`);
    } else {
      setMessage(`Payment succeeded! Payment Intent ID: ${paymentIntent.id}`);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Enter Payment Amount</h2>
      <input
        type="number"
        placeholder="Amount in USD"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded"
      />
      <CardElement 
        className="mb-4" 
        options={{
          style: { base: { fontSize: '16px' } },
          hidePostalCode: false
        }} 
      />
      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full py-3 mt-3 bg-indigo-600 text-white rounded cursor-pointer disabled:opacity-50 hover:bg-indigo-700 relative"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </div>
        ) : (
          `Pay $${amount || '...'}`
        )}
      </button>
      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  );
}

export default function StripePaymentForm() {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex justify-center p-5 border-4 border-red-500 min-h-[40vh] bg-white">
        <div className="text-gray-700 flex items-center">
          <CheckoutForm />
        </div>
      </div>
    </Elements>
  );
}
