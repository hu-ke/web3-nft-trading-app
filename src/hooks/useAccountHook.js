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
  }

  useEffect(() => {
    queryAccount()
  }, [])

  return [account]
}

export default useAccountHook;
