require("@nomiclabs/hardhat-waffle");

const secrets = require('./secret_keys.json');

const ALCHEMY_API_KEY = secrets.ALCHEMY_API_KEY;
const ROPSTEN_PRIVATE_KEY = secrets.ROPSTEN_PRIVATE_KEY;

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
      id: 3
    }
  }
};
