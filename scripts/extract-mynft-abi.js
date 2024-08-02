const fs = require('fs');
const path = require('path');

// 指定合约文件路径
const artifactPath = path.join(__dirname, '../build/contracts/MyNFT.json');
const desPath = path.join(__dirname, '../src/contracts/MyNFT.json');

// 读取合约文件
const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));

// 保留必要的部分：ABI 和字节码
const cleanedArtifact = {
  abi: artifact.abi,
  // bytecode: artifact.bytecode,
};

// 写回精简后的文件
fs.writeFileSync(desPath, JSON.stringify(cleanedArtifact, null, 2));

console.log('Cleaned artifact saved to', desPath);
