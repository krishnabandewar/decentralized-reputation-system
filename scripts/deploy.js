const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with:", deployer.address);

  const Reputation = await ethers.getContractFactory("Reputation");
  const rep = await Reputation.deploy();

  await rep.waitForDeployment(); // ✅ Use this instead of rep.deployed()

  console.log("Deployed to:", await rep.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
