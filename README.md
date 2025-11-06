# AxionAX Protocol - Compute Marketplace 🛍️

Decentralized marketplace for compute resources built on **AxionAX Protocol**.

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Protocol](https://img.shields.io/badge/Protocol-AxionAX-purple)](https://axionax.org)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange)](https://github.com/axionaxprotocol/axionaxiues)

---

## Overview

The **AxionAX Compute Marketplace** is a decentralized application (dApp) built
on the AxionAX Protocol that enables users to trade compute resources securely
and efficiently.

### Part of AxionAX Ecosystem

This marketplace is powered by AxionAX Protocol:

- **Protocol Core**: [`../core`](../core) - Provides PoPC consensus and
  validation
- **SDK**: [`../sdk`](../sdk) - Used for blockchain interaction
- **Web Interface**: [`../web`](../web) - Main website
- **Documentation**: [`../docs`](../docs) - Protocol documentation
- **Deployment**: [`../deploy`](../deploy) - Infrastructure

**Main Repository**:
[axionaxprotocol/axionaxiues](https://github.com/axionaxprotocol/axionaxiues)

---

## Features

### For Buyers

- **Browse Resources** - Search and filter available compute offerings
- **Transparent Pricing** - See real-time prices based on AxionAX Protocol's
  Posted Price Controller
- **PoPC Validation** - Compute results validated by Proof of Probabilistic
  Checking
- **Token Payments** - Pay with native AXX tokens
- **Quality Assurance** - Provider ratings and reputation system

### For Sellers (Compute Providers)

- **List Resources** - Offer your compute power to the network
- **Dynamic Pricing** - Prices adjusted by Protocol's Auto-Selection Router
- **Smart Escrow** - Secure payments via AxionAX Protocol smart contracts
- **Reputation Building** - Earn ratings for quality service
- **Fair Assignment** - ML-powered worker selection ensures fairness

### Built on AxionAX Protocol

- ✅ **PoPC Consensus** - Probabilistic validation of compute results
- ✅ **ASR Integration** - Auto-Selection Router for optimal matching
- ✅ **DeAI Sentinel** - Fraud detection and prevention
- ✅ **On-Chain Governance** - DAO-managed parameters

## Tech Stack

- **Frontend**: Vite + React 18 + TypeScript
- **Blockchain**: @axionax/sdk
- **Web3**: Ethers.js / Viem
- **Styling**: TailwindCSS
- **State**: React Context / Zustand
- **Routing**: React Router

## Installation

\\\ash npm install

# or

yarn install

# or

pnpm install \\\

## Development

### Start dev server

\\\ash npm run dev \\\

Open [http://localhost:5173](http://localhost:5173)

### Build for production

\\\ash npm run build \\\

### Preview production build

\\\ash npm run preview \\\

### Lint code

\\\ash npm run lint \\\

## Project Structure

\\\
src/ components/ # React components marketplace/ # Marketplace-specific
components common/ # Shared UI components pages/ # Route pages hooks/ # Custom
React hooks contexts/ # React contexts (wallet, marketplace) contracts/ # Smart
contract ABIs and addresses utils/ # Helper functions types/ # TypeScript types
public/ # Static assets \\\

## Connecting to Axionax

The marketplace connects to Axionax testnet by default:

\\\ ypescript import { AxionaxClient } from '@axionax/sdk';

const client = new AxionaxClient({ rpcUrl: 'https://rpc.axionax.org', chainId:
1001 }); \\\

## Smart Contracts

The marketplace uses these smart contracts:

- **ComputeMarketplace** - Main marketplace logic
- **ResourceNFT** - NFT representation of compute resources
- **EscrowManager** - Payment escrow and dispute resolution
- **ReputationOracle** - Provider rating system

Contract addresses for testnet: \\\
ComputeMarketplace: 0x... ResourceNFT: 0x... EscrowManager: 0x... \\\

## Usage

### For Buyers

1. Connect your wallet
2. Browse available compute resources
3. Select desired specifications (CPU, RAM, GPU)
4. Submit order and approve AXX token payment
5. Receive resource access credentials

### For Sellers

1. Connect your wallet
2. Register as a compute provider
3. List your resources (specs, pricing, availability)
4. Accept orders and provide access
5. Receive AXX tokens upon order completion

## Testing

\\\ash npm run test npm run test:watch npm run test:coverage \\\

## Environment Variables

Create \.env\ file:

\\\env VITE_RPC_URL=https://rpc.axionax.org VITE_CHAIN_ID=1001
VITE_MARKETPLACE_CONTRACT=0x... VITE_RESOURCE_NFT_CONTRACT=0x...
VITE_ESCROW_CONTRACT=0x... \\\

## Related Projects & AxionAX Ecosystem

### Core Components

- **[Protocol Core](../core)** - AxionAX blockchain implementation
- **[SDK](../sdk)** - TypeScript SDK (used by this marketplace)
- **[Web Interface](../web)** - Official website
- **[Documentation](../docs)** - Protocol documentation
- **[DevTools](../devtools)** - Development utilities
- **[Deploy](../deploy)** - Infrastructure deployment

### External Resources

- **Main Repository**: https://github.com/axionaxprotocol/axionaxiues
- **Protocol Website**: https://axionax.org
- **Documentation**: https://docs.axionax.org

---

## Contributing

1. Fork the main repository:
   [axionaxprotocol/axionaxiues](https://github.com/axionaxprotocol/axionaxiues)
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Work in the `marketplace/` directory
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

## License

MIT License - see [LICENSE](LICENSE) for details.

**Note**: The AxionAX Protocol Core uses AGPLv3. See
[`../core/LICENSE`](../core/LICENSE).

---

## Support

- **Website**: https://axionax.org
- **Docs**: https://docs.axionax.org or [`../docs`](../docs)
- **Issues**: https://github.com/axionaxprotocol/axionaxiues/issues

### Community (Coming Q1 2026)

- **Discord**: https://discord.gg/axionax
- **Twitter**: https://twitter.com/axionaxprotocol

---

**Part of the AxionAX Protocol Ecosystem**

Built with ❤️ by the AxionAX community

**Last Updated**: November 6, 2025
