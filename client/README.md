# ETH Address Scanner

Easily scan any Ethereum address to retrieve real-time blockchain data.

## Project Structure

- server/ — Node.js + Express server hosted on Fly.io
- client/ — React app built with Vite, deployed on Vercel

## Features

- Scan any Ethereum wallet or contract address
- Get ETH balance, transaction nonce, ENS name
- Detect if it's a smart contract
- Show latest block number and hash
- Smooth animated UI using Tailwind and ShaderGradient

## Tech Stack

- Node.js + Express
- Ethers.js (v6)
- Alchemy API
- React (Vite)
- Tailwind CSS
- Socket.io
- Vercel (Client)
- Fly.io (Server)
- pnpm (Package manager)

## Setup

### Clone the repository

```bash
git clone https://github.com/your-username/eth-scanner.git
cd eth-scanner
```

### Server (Fly.io)

```bash
cd server
pnpm install

# Create .env file with your Alchemy key
echo "ALCHEMY_API_KEY=your_key_here" > .env

node server.js
```

### Client (Vercel)

```bash
cd ../client
pnpm install

# Create .env file to set the socket URL ( http://localhost:3000 )
echo "VITE_SOCKET_URL=your_socket_here > .env

pnpm dev
```

Open http://localhost:5173
