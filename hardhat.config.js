require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "5961d7f91d080bc6ba7ffc23fec0464a18da5cd7";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://delicate-side-river.matic-testnet.discover.quiknode.pro/${projectId}/`,
      accounts: [privateKey],
    },
    mainnet: {},
  },
};

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};
