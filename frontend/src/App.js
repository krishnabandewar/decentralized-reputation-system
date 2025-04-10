import React, { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers";
 // Save ABI here
 import contractArtifact from "./Reputation.json";
const reputationABI = contractArtifact.abi;


const contractAddress = "0x882B81f1e5592fcBedfe43FCc15270986499B4b9";

function App() {
  const [wallet, setWallet] = useState("");
  const [rep, setRep] = useState(0);

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWallet(address);
      getReputation(address, provider);
    }
  }
  
  async function getReputation(address, providerInstance) {
    const contract = new Contract(contractAddress, reputationABI, providerInstance);
    const repValue = await contract.getReputation(address);
    setRep(repValue.toString());
  }
  async function increaseReputation() {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(contractAddress, reputationABI, signer);
    const tx = await contract.increaseReputation(wallet, 10);
    await tx.wait();
    getReputation(wallet, provider);
  }
  

  return (
    <div>
      <h1>Decentralized Reputation System</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      <p>Wallet: {wallet}</p>
      <p>Reputation Score: {rep}</p>
      <button onClick={increaseReputation}>Increase Reputation</button>
    </div>
  );
}

export default App;
