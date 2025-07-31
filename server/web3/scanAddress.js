import { ethers, formatEther } from "ethers";
import "dotenv/config";

const URL = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;
const provider = new ethers.JsonRpcProvider(URL);

export default async function scanAddress(address) {
  try {
    // Accounts Methods
    // Returns the current balance of an account (by address or ENS name)
    const balance = await provider.getBalance(address);

    // Returns the contract code of address as of the blockTag block height.
    const contractCode = await provider.getCode(address);

    // Returns the number/nonce of transactions address has ever sent, as of blockTag.
    const nonce = await provider.getTransactionCount(address);

    // Ethereum Naming Service (ENS) Methods
    // Performs a reverse lookup of the address in ENS using the Reverse Registrar.
    const ens = await provider.lookupAddress(address);

    // Returns the block number (or height) of the most recently mined block.
    const blockNumber = await provider.getBlockNumber();

    // Blocks Methods
    // Returns the block from the network, where the result.transactions is a list of transaction hashes.
    const block = await provider.getBlock(blockNumber);

    return {
      address,
      balance: formatEther(balance),
      isContract: contractCode !== "0x", // ⬅️ If 0x, it's not a contract
      nonce,
      ens,
      blockNumber,
      blockHash: block.hash,
    };
  } catch (err) {
    console.error("❌ Error scanning address:", err.message);
    return { error: err.message };
  }
}
