// app/page.js
'use client';

import CheckoutForm from './components/StripeCheckoutForm';
// import ContractCallVote from './components/ContractCallVote';
// import ConnectWallet from './components/ConnectWallet';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "YOUR_STRIPE_PUBLISHABLE_KEY";

const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Page() {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex justify-center p-5 h-[100vh] bg-white">
        <div className="flex flex-row justify-between items-start w-full max-w-7xl mx-auto px-4 mt-20">
          {/* Left side - Stripe form */}
          <div className="w-full text-gray-700 mr-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}
