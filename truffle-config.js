const HDWalletProvider = require('@truffle/hdwallet-provider');
// 对应sepolia网络上的测试账号，在设置中的“Reveal Secret Recovery Phrase”查看
const mnemonic = 'light vote noble copper drink winter congress scrap smile valley enable smile';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
  // 指定合约构建文件保存的目录
  // contracts_build_directory: "./src/contracts",
};
