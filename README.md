# StackPay - Bitcoin Tap-to-Pay with Crypto!

A project built in 24 hours to make Bitcoin-backed, tap-to-pay transactions easy, secure, and usable anywhere! This app brings the benefits of Web3 and Automated Market Makers (AMMs) into a simple, intuitive app that anyone can use. StackPay is built on the Stacks blockchain and integrated with the XRP EVM chain for flexibility and fast transaction handling.

## Project Overview

### Objective
Create a "buy now, pay later" (BNPL) solution that allows users to make real-world purchases with cryptocurrency. Using Stacks (sBTC and satoshis) and Stripe for instant fiat conversion, StackPay enables Bitcoin-backed transactions at retail locations and online stores.

### Solution Approach

1. **Instant Crypto Payments**: StackPay enables near-instantaneous payments by simulating Bitcoin-backed transactions using sBTC. A smart contract initiates each transaction, allowing users to pay in crypto while merchants receive fiat, minimizing volatility exposure.

2. **Smart Contract Rebalancing**: Each transaction is secured with a Clarity smart contract on the Stacks blockchain, managing asset conversion and rebalancing the transaction seamlessly.

3. **Stripe Integration**: Integrated Stripe API enables fiat transactions to vendors in real-time, while crypto remains securely managed through the app's backend.

4. **Contract Monitoring**: Real-time monitoring via Chain Hook indexing on Stacks triggers confirmations, ensuring timely processing and a reliable user experience.

5. **User-Friendly Interface**: StackPay provides a tap-to-pay interface that feels familiar to users of Cash App or Venmo, offering simplicity along with the security of crypto.

### Key Features
- **Stacks Blockchain**: Supports secure, decentralized transactions through sBTC, maintaining Bitcoin's security and stability.
- **Clarity Smart Contracts**: Ensures predictable, secure transaction flows, from crypto conversion to fiat payout.
- **Real-Time Monitoring**: Uses Stacks contract monitoring and Chain Hooks for reliable event handling and transaction confirmation.
- **API Integration with Stripe**: Allows instant fiat payment, offering merchants a straightforward, crypto-compatible POS solution.

---

## Technical Overview

### Technologies Used
- **Stacks Blockchain**: Provides the foundation for secure and decentralized sBTC transactions.
- **Clarity Smart Contracts**: Enables reliable transaction handling and rebalancing logic.
- **Stripe API**: Supports fiat conversion for real-world payments.
- **Contract Monitoring**: Tracks transaction events in real time to trigger payment actions.

### Project Components
- **Express Server**: Backend server to handle Stripe calls and mock contract interactions for demonstration purposes.
- **Smart Contracts**: Used to ensure transaction flow, handle asset conversion, and secure user funds.
- **Chain Hook Indexing**: Monitors contract events on the blockchain to confirm transactions in real-time.

---

## How It Works

1. **User Initiates Transaction**: User taps to pay, starting a transaction in crypto (sBTC).
2. **Instant Fiat Conversion**: Through Stripe, the transaction is converted to fiat for merchant convenience.
3. **Smart Contract Rebalancing**: The Clarity smart contract secures and finalizes the transaction, ensuring smooth, balanced transfers.
4. **Payment Confirmation**: Real-time contract monitoring triggers the confirmation, allowing for instant transaction finality.

---

## Problem StackPay Solves

Despite the popularity of cryptocurrencies, Bitcoin is challenging to use for daily purchases due to slow transaction times and a lack of direct merchant support. StackPay resolves these issues by:
- **Offering Immediate, Bitcoin-Backed Payments**: sBTC transactions make Bitcoin-backed purchases fast and secure.
- **Providing Fiat Conversion for Merchants**: Vendors receive fiat directly, avoiding cryptocurrency volatility.
- **Leveraging Bitcoin and Stacks Security**: Uses Bitcoin’s stability combined with Stacks' smart contract capabilities to support safe, practical crypto payments.

---

## Future Directions

StackPay aims to extend functionality to include:
- **Payment Scheduling (BNPL Model)**: Enable scheduled crypto payments.
- **Crypto-Backed Loans**: Support greater crypto adoption with secure, contract-backed loans.
- **Mainnet Deployment**: Roll out the app on mainnet with additional testing, security, and scalability improvements.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Stacks CLI](https://docs.hiro.so/stacks-cli)
- [Stripe API Key](https://stripe.com/docs/keys)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/LeoMattosMartins/EasyAHarvardHack24.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure environment variables for Stacks and Stripe in `.env`.

4. Run the server:
    ```bash
    npm start
    ```

---

## Team
This project was built by:
- **Leo Mattos** 
- **Tanay Baswa**
- **Taihei Eastwood**
- **Robert Sevcik**

Twitter: [Tanay Baswa](https://x.com/Tanay_Baswa)  
GitHub: [LeoMattosMartins](https://github.com/LeoMattosMartins)

---

## License
This project is open-source and licensed under the MIT License.
