"use client";

import React, { useEffect, useState } from "react";
import { useConnect } from "@stacks/connect-react";
import { StacksTestnet } from "@stacks/network";
import {
  AnchorMode,
  PostConditionMode,
  stringUtf8CV,
  uintCV,
} from "@stacks/transactions";
import { userSession } from "./ConnectWallet";

// export const triggerSmartContract = () => {
//   console.log("Smart contract triggered!");
// };
const payNum = 1;
export const triggerSmartContract = () => {
  const { doContractCall } = useConnect();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  function pay(pick: string) {
    doContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any,
      contractAddress: "STJ8VVRY1GF5BZMS2D5691S1V1E956AEA9WNDVWP",
      contractName: "empirical-chocolate-starfish",
      functionName: "send-to-recipient",
      functionArgs: [uintCV(pick)],
      postConditionMode: PostConditionMode.Deny,
      postConditions: [],
      onFinish: (data) => {
        console.log("onFinish:", data);
        window
          .open(
            `https://explorer.hiro.so/txid/${data.txId}?chain=testnet`,
            "_blank"
          )
          ?.focus();
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    });
  }

  if (!mounted || !userSession.isUserSignedIn()) {
    return null;
  }

  return (
    <div className="Container" style = {{margin: '10'}}>
      <button className="Connect" onClick={() => pay("" + payNum)}>
        Pay
      </button>
    </div>
  );
};

export default triggerSmartContract;
