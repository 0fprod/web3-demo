import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import Web3 from 'web3';
import { tetherAbi } from '../artifacts/tether.artifact';

export const useTether = () => {
  const { active, library } = useWeb3React<Web3>();
  const rinkebyTetherAddress = '0x3B00Ef435fA4FcFF5C209a37d1f3dcff37c705aD';
  const tetherInstance = useMemo(() => {
    if (active && library) {
      return new library.eth.Contract(tetherAbi as any, rinkebyTetherAddress);
    }
  }, [active, library?.eth?.Contract]);

  return tetherInstance;
};
