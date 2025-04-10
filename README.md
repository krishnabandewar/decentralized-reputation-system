# Decentralized Reputation System

A blockchain-based reputation system that allows tracking and managing reputation scores for Ethereum addresses. Built with Solidity, React, and ethers.js.

## Features

- Connect MetaMask wallet
- View reputation score for connected address
- Increase reputation score through transactions
- Real-time updates of reputation changes
- Responsive UI with modern design

## Technology Stack

- **Smart Contracts**: Solidity 0.8.18
- **Frontend**: React 19.1.0
- **Blockchain Interaction**: ethers.js 6.13.5
- **Development Framework**: Hardhat
- **Styling**: CSS with gradient effects and glassmorphism
- **Network**: Polygon Mumbai Testnet

## Project Structure

```
decentralized-reputation-system/
├── contracts/               # Smart contract source files
│   └── reputation.sol      # Main reputation contract
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── App.js         # Main application component
│   │   └── App.css        # Styling
├── scripts/                # Deployment scripts
├── test/                   # Contract test files
└── hardhat.config.js       # Hardhat configuration
```

## Smart Contract Details

The Reputation contract (`contracts/reputation.sol`) implements:

- Mapping of addresses to reputation scores
- Function to increase reputation
- Function to query reputation scores
- Events for reputation changes

Contract Address: `0x882B81f1e5592fcBedfe43FCc15270986499B4b9` (Mumbai Testnet)

## Getting Started

### Prerequisites

- Node.js >= 14.0.0
- MetaMask wallet
- Mumbai testnet MATIC tokens

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/decentralized-reputation-system.git
cd decentralized-reputation-system
```

2. Install dependencies
```bash
npm install
cd frontend
npm install
```

3. Create a .env file in the root directory
```env
RPC_URL=your_mumbai_rpc_url
PRIVATE_KEY=your_private_key
```

### Running the Application

1. Start the frontend development server
```bash
cd frontend
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

### Deploying the Contract

```bash
npx hardhat run scripts/deploy.js --network mumbai
```

## Testing

Run the test suite:

```bash
npx hardhat test
```

## Deployment

The frontend is configured for deployment on Vercel. The `vercel.json` configuration handles the build and routing setup.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- OpenZeppelin for smart contract libraries
- Hardhat development environment
- ethers.js documentation
- React.js community
