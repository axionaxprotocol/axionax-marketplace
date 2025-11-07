# AxionAX Protocol - Compute Marketplace 🛍️

Decentralized marketplace for compute resources built on **AxionAX Protocol**.

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Protocol](https://img.shields.io/badge/Protocol-AxionAX-purple)](https://axionax.org)
[![Status](https://img.shields.io/badge/Status-Beta-orange)](https://github.com/axionaxprotocol/axionaxiues)

---

## 📢 Latest Update (November 2025)

🎯 **Beta Testing Phase - Preparing for Public Testnet!**

Current development status:

✅ **Core Features Complete:**
- Browse & search compute resources
- Wallet integration (MetaMask, WalletConnect)
- Token payments with AXX
- Provider listings & ratings
- Smart contract integration

🔥 **Active Development:**
- UI/UX refinement
- Performance optimization
- E2E testing
- Smart contract auditing
- Mobile responsiveness

📦 **Marketplace Status:** Beta - ready for testnet deployment

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
- **DevTools**: [`../devtools`](../devtools) - Testing utilities
- **Deployment**: [`../deploy`](../deploy) - Infrastructure
- **Issue Manager**: [`../issue-manager`](../issue-manager) - Task tracking

**Main Repository**:
[axionaxprotocol/axionaxiues](https://github.com/axionaxprotocol/axionaxiues)

**Beta Status:** Core features complete, UI refinement in progress

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

```bash
npm install

# or
yarn install

# or
pnpm install
```

## Development

### Start dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint code

```bash
npm run lint
```

## Project Structure

```
src/
  components/          # React components
    marketplace/       # Marketplace-specific components
    common/           # Shared UI components
  pages/              # Route pages
  hooks/              # Custom React hooks
  contexts/           # React contexts (wallet, marketplace)
  contracts/          # Smart contract ABIs and addresses
  utils/              # Helper functions
  types/              # TypeScript types
public/               # Static assets
```

## Connecting to AxionAX

The marketplace connects to AxionAX testnet by default:

```typescript
import { AxionaxClient } from '@axionax/sdk';

const client = new AxionaxClient({
  rpcUrl: 'https://rpc.axionax.org',
  chainId: 86137  // AxionAX Testnet
});
```

**Network Information:**
- **Testnet Chain ID**: `86137`
- **RPC**: `https://rpc.axionax.org` (Coming Q1 2026)
- **Explorer**: `https://explorer.axionax.org` (Coming Q1 2026)
- **Faucet**: `https://faucet.axionax.org` (Coming Q1 2026)

## Smart Contracts

The marketplace uses these smart contracts:

- **ComputeMarketplace** - Main marketplace logic
- **ResourceNFT** - NFT representation of compute resources
- **EscrowManager** - Payment escrow and dispute resolution
- **ReputationOracle** - Provider rating system

**Contract addresses for testnet:**
```
ComputeMarketplace: 0x... (TBA - Testnet Launch)
ResourceNFT: 0x... (TBA - Testnet Launch)
EscrowManager: 0x... (TBA - Testnet Launch)
ReputationOracle: 0x... (TBA - Testnet Launch)
```

**Note:** Contract addresses will be published after testnet deployment.

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

```bash
npm run test
npm run test:watch
npm run test:coverage
```

### E2E Testing

```bash
npm run test:e2e
```

**Testing Goals:**
- Unit test coverage: >80%
- Integration tests: All workflows
- E2E tests: Critical user journeys

## Environment Variables

Create `.env` file:

```env
VITE_RPC_URL=https://rpc.axionax.org
VITE_CHAIN_ID=86137
VITE_MARKETPLACE_CONTRACT=0x...
VITE_RESOURCE_NFT_CONTRACT=0x...
VITE_ESCROW_CONTRACT=0x...
VITE_REPUTATION_CONTRACT=0x...
```

**Note:** Contract addresses will be available after testnet deployment.

---

## 🎯 Pre-Testnet Development Checklist

Track marketplace readiness:

- [x] ✅ Core marketplace features
- [x] ✅ Wallet integration (MetaMask, WalletConnect)
- [x] ✅ Smart contract integration
- [ ] 🔥 UI/UX refinement (90%)
- [ ] 🔥 Mobile responsiveness (85%)
- [ ] 📝 E2E testing (in progress)
- [ ] 📝 Performance optimization
- [ ] 📝 Smart contract deployment (pending testnet)
- [ ] 📝 Contract address configuration

Use [`../issue-manager`](../issue-manager) to track tasks.

---

## Related Projects & AxionAX Ecosystem

### Core Components

| Component              | Description                | Location                           | Status      |
| ---------------------- | -------------------------- | ---------------------------------- | ----------- |
| **Marketplace** (this) | Compute marketplace dApp   | `marketplace/`                     | 🚧 Beta     |
| **Protocol Core**      | Blockchain implementation  | [`../core`](../core)               | ✅ Ready    |
| **SDK**                | TypeScript SDK             | [`../sdk`](../sdk)                 | ✅ Ready    |
| **Web Interface**      | Official website           | [`../web`](../web)                 | ✅ Ready    |
| **Documentation**      | Protocol documentation     | [`../docs`](../docs)               | 📝 Active   |
| **DevTools**           | Development utilities      | [`../devtools`](../devtools)       | ✅ Ready    |
| **Deploy**             | Infrastructure deployment  | [`../deploy`](../deploy)           | 🔥 Testing  |
| **Issue Manager**      | Task tracking              | [`../issue-manager`](../issue-manager) | 🎉 New! |

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

## 📊 Development Progress

### Feature Completion

- **Core Marketplace Logic**: 100% ✅
- **Wallet Integration**: 100% ✅
- **Smart Contract ABIs**: 100% ✅
- **UI Components**: 90% 🔥
- **Mobile Responsive**: 85% 🔥
- **Testing Coverage**: 75% 📝
- **Documentation**: 80% 📝

### Known Limitations (Beta)

- Smart contracts not yet deployed to testnet
- RPC endpoints pending testnet launch
- Some UI animations in progress
- Mobile optimization ongoing

---

**Part of the AxionAX Protocol Ecosystem**

Built with ❤️ by the AxionAX community

**Last Updated**: November 7, 2025
