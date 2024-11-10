"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import StripeForm from "../components/StripeForm";

import { Connect } from "@stacks/connect-react";

import ConnectWallet, { userSession } from "../components/ConnectWallet";
import ContractCallVote from "../components/ContractCallVote";

// Import the smart contract function
import { triggerSmartContract } from "../components/ContractCallVote"; // Adjust the import based on your project structure

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleButtonClick = async () => {
    try {
      // Call the smart contract function without arguments
      await triggerSmartContract(); 
      alert("Smart contract triggered successfully!");
    } catch (error) {
      console.error("Error triggering smart contract:", error);
      alert("Failed to trigger smart contract.");
    }
  };

  if (!isClient) return null;

//   return (
//     <Connect
//       authOptions={{
//         appDetails: {
//           name: "Stacks Next.js Template",
//           icon: window.location.origin + "/logo.png",
//         },
//         redirectTo: "/",
//         onFinish: () => {
//           window.location.reload();
//         },
//         userSession,
//       }}
//     >
//       <main className="">
//         {/* Container div - modified to ensure proper side-by-side layout */}
//         <div className="flex flex-row justify-between items-start w-full max-w-7xl mx-auto px-4">
//           {/* Left side - Stripe form */}
//           <div className="w-1/2 border-2 border-gray-300 rounded-lg p-6 shadow-lg mr-4">
//             <h2 className="text-2xl font-bold mb-4">Credit Card Payment</h2>
//             <StripeForm />
//           </div>
          
//           {/* Right side - sBTC integration */}
//           <div className="w-1/2 border-2 border-gray-300 rounded-lg p-6 shadow-lg ml-4">
//             <h2 className="text-2xl font-bold mb-4">sBTC Payment</h2>
//             <ConnectWallet />
//             <ContractCallVote />
//           </div>
//         </div>
//       </main>
//     </Connect>
//   );
// }

return (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-1/2 border-2 border-gray-300 rounded-lg p-8 shadow-lg">
      <StripeForm />
    </div>
  </div>
);
}
