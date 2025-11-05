# Axionax Marketplace

Decentralized marketplace for compute resources on the Axionax network.

##  Overview

The Axionax Marketplace enables users to:
- **Buy** compute power from providers
- **Sell** your own compute resources
- **Trade** securely with smart contract escrow
- **Pay** with AXX tokens

##  Features

-  **Browse Resources** - Search and filter available compute offerings
-  **Token Payments** - Native AXX token integration
-  **Smart Escrow** - Secure transactions via smart contracts
-  **Provider Ratings** - Reputation system for quality assurance
-  **Real-time Updates** - Live availability and pricing
-  **Modern UI** - Responsive design with TailwindCSS

##  Tech Stack

- **Frontend**: Vite + React 18 + TypeScript
- **Blockchain**: @axionax/sdk
- **Web3**: Ethers.js / Viem
- **Styling**: TailwindCSS
- **State**: React Context / Zustand
- **Routing**: React Router

##  Installation

\\\ash
npm install
# or
yarn install
# or
pnpm install
\\\

##  Development

### Start dev server

\\\ash
npm run dev
\\\

Open [http://localhost:5173](http://localhost:5173)

### Build for production

\\\ash
npm run build
\\\

### Preview production build

\\\ash
npm run preview
\\\

### Lint code

\\\ash
npm run lint
\\\

##  Project Structure

\\\
src/
  components/     # React components
    marketplace/  # Marketplace-specific components
    common/       # Shared UI components
  pages/          # Route pages
  hooks/          # Custom React hooks
  contexts/       # React contexts (wallet, marketplace)
  contracts/      # Smart contract ABIs and addresses
  utils/          # Helper functions
  types/          # TypeScript types
public/           # Static assets
\\\

##  Connecting to Axionax

The marketplace connects to Axionax testnet by default:

\\\	ypescript
import { AxionaxClient } from '@axionax/sdk';

const client = new AxionaxClient({
  rpcUrl: 'https://rpc.axionax.org',
  chainId: 1001
});
\\\

##  Smart Contracts

The marketplace uses these smart contracts:

- **ComputeMarketplace** - Main marketplace logic
- **ResourceNFT** - NFT representation of compute resources
- **EscrowManager** - Payment escrow and dispute resolution
- **ReputationOracle** - Provider rating system

Contract addresses for testnet:
\\\
ComputeMarketplace: 0x...
ResourceNFT: 0x...
EscrowManager: 0x...
\\\

##  Usage

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

##  Testing

\\\ash
npm run test
npm run test:watch
npm run test:coverage
\\\

##  Environment Variables

Create \.env\ file:

\\\env
VITE_RPC_URL=https://rpc.axionax.org
VITE_CHAIN_ID=1001
VITE_MARKETPLACE_CONTRACT=0x...
VITE_RESOURCE_NFT_CONTRACT=0x...
VITE_ESCROW_CONTRACT=0x...
\\\

##  Related Projects

- **[axionax-core](https://github.com/axionaxprotocol/axionax-core)** - Protocol implementation
- **[axionax-sdk-ts](https://github.com/axionaxprotocol/axionax-sdk-ts)** - TypeScript SDK
- **[axionax-deploy](https://github.com/axionaxprotocol/axionax-deploy)** - Deployment infrastructure
- **[axionax-web](https://github.com/axionaxprotocol/axionax-web)** - Official website

##  Contributing

1. Fork the repository
2. Create feature branch (\git checkout -b feature/amazing-feature\)
3. Commit changes (\git commit -m 'Add amazing feature'\)
4. Push to branch (\git push origin feature/amazing-feature\)
5. Open a Pull Request

##  License

MIT License

##  Support

- **Website**: https://axionax.org
- **Docs**: https://docs.axionax.org
- **Discord**: https://discord.gg/axionax
- **Issues**: https://github.com/axionaxprotocol/axionax-marketplace/issues

---

Built with  by the Axionax community
