require("@nomicfoundation/hardhat-toolbox");

const URL_RPC = "https://api.xyzinnovation.tech/";
const NEXT_PUBLIC_PRIVATE_KEY = "59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "glide_testnet",
  networks: {
    // hardhat: {
    //   chainId: 31337,
    // },
    // polygon_amoy: {
    //   url: URL_RPC,
    //   accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    // },
    glide_testnet: {
        chainId: 901,
        url: URL_RPC,
        accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
