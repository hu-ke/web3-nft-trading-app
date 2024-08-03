<p align="center">
    <br> <a href="README.md">English</a> | 中文
</p>

# Web3 NFT 交易应用

该仓库包含部署在 Sepolia 网络上的 NFT 资产生成和交易应用的前端部分。应用托管在 [sepolia.reader.guru](https://sepolia.reader.guru/)。

## 概述

Web3 NFT 交易应用是一个去中心化应用 (DApp)，允许用户在 Sepolia 测试网络上生成、交易和管理 NFT（非同质化代币）。此仓库包含前端代码，而后端 API 层使用 Egg.js 实现，详细信息请参见单独的仓库。

## 仓库

- **前端：** [web3-nft-trading-app](https://github.com/hu-ke/web3-nft-trading-app)
- **后端：** [web3-nft-trading-node](https://github.com/hu-ke/web3-nft-trading-node)

## 功能

- **NFT 生成：** 创建具有可定制元数据的独特 NFT。
- **NFT 交易：** 在平台上购买、出售和交易 NFT。
- **钱包集成：** 连接您的以太坊钱包以与 DApp 互动。
- **Sepolia 测试网络：** 所有交易都在 Sepolia 测试网络上进行。

## 入门

### 前置条件

- Node.js
- npm 或 yarn
- Metamask（或任何以太坊钱包）

### 安装

1. 克隆仓库：

   ```bash
   git clone https://github.com/hu-ke/web3-nft-trading-app.git
   cd web3-nft-trading-app
   ```
2. 安装依赖：
   ```
   npm install
   # 或
   yarn install
   ```
3. 启动开发服务器：
   ```
   npm start
   # 或
   yarn start
   ```
4. 打开浏览器并访问 http://localhost:5173 查看应用。
## 后端 API
此应用的后端 API 使用 Egg.js 实现。您可以在 web3-nft-trading-node 仓库中找到后端代码和更多详细信息。

## 免责声明
请注意，此应用使用的是 Sepolia 测试网络。确保您在此平台上进行交易时不使用以太坊主网上的真实 ETH。

## 贡献
欢迎贡献！请 fork 仓库并提交 pull request 以改进、修复错误或添加新功能。

## 许可证
此项目使用 MIT 许可证。详情请参见 LICENSE 文件。

## 联系方式
如果您有任何问题或反馈，请提交 issue 或联系仓库所有者。