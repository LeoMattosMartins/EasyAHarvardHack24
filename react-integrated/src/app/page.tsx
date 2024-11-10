"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

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

  return (
    <Connect
      authOptions={{
        appDetails: {
          name: "Stacks Next.js Template",
          icon: window.location.origin + "/logo.png",
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      }}
    >
      <main className={styles.main}>

        <div style={{ margin: '1px' }}>
          {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
          <ConnectWallet />
          <div className={styles.center} style={{ fontSize: '40px', margin: '1px'}}>
          <h1>Zzzzz</h1>
        </div>
          {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
          <ContractCallVote />
        </div>                                                        

        {/* Button to trigger the smart contract styled the same as the connect/disconnect wallet button */}
      </main>
    </Connect>
  );
}
