// https://eth-ropsten.alchemyapi.io/v2/2Dy1fJBWYbAp69Es8VbEHglYG-6jQCZN

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/2Dy1fJBWYbAp69Es8VbEHglYG-6jQCZN',
      accounts: ['158544cb54aaf2eb99a42f8ce2e3df33d42b898c7fa1aecd014c125b8ed9503d'],
    },
  },
};