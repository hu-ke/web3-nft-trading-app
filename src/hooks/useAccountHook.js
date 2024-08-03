import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function useAccountHook() {
  const [account, setAccount] = useState()

  const queryAccount = async() => {
    if (!window.ethereum) {
      console.error('[queryAccount error] Please check if your Metamask is open.')
      return
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);

    // 监听账户变化
    ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length > 0) {
        console.log('Account changed:', accounts[0]);
        window.location.reload()
        setAccount(account[0])
      } else {
        console.log('Please connect to MetaMask.');
      }
  });

  }

  useEffect(() => {
    queryAccount()
  }, [])

  return [account]
}

export default useAccountHook;
