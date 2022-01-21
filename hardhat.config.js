/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "RinkeyBy",
   networks: {
      hardhat: {},
      RinkeyBy: {
         url: "https://eth-rinkeby.alchemyapi.io/v2/CdwBLalvKtyL8AWl5YdiW5B3jsdOUL7t",
         accounts: [`0x60a606841fc2d68c8b8ce3e4aa8e6a7360555b5f47ac78fd02e23fc1fddb9198`]
      }
   },
}
