import { StyledExamples, DonateBtn } from "./Examples.styled"
import { useCallback, useContext, useEffect, useState } from "react";
import { StyledButton } from "../Display.styled"
import { useWeb3React } from "@web3-react/core"
import { Field } from "./Field/Field"
import Web3 from "web3";
import { LogContext } from "../../../context/Log.context";
import { useCutAddress } from "../../../hooks/useCutAddress";
import { useTether } from "../../../hooks/useTether";


export const Examples: React.FC = () => {
  const { active, account, deactivate, library } = useWeb3React<Web3>()
  const [balance, setBalance] = useState('')
  const [totalSupply, setTotalSupply] = useState(0)
  const logContext = useContext(LogContext)
  const tether = useTether();

  const disconnect = () => {
    deactivate()
    localStorage.removeItem('wasConnected')
    logContext?.setLogs('Disconnected')
  }

  const getBalance = useCallback(async () => {
    if (account && library) {
      logContext?.setLogs('Requesting balance...')
      const balance = await library.eth.getBalance(account)
      setBalance(toDecimal(balance))
    }
  }, [library?.eth])

  const getTotalSupply = useCallback(async () => {
    if (active && tether) {
      logContext?.setLogs('Requesting tether max supply...')
      const supply = await tether.methods.totalSupply().call()
      setTotalSupply(supply)
    }

  }, [library?.eth?.Contract])


  const donate = useCallback(async () => {
    if (library?.eth) {
      library.eth.sendTransaction({
        from: '0x9D3052DB3062d60643682B1272d00a6bF4A6f5E6',
        to: '0xC4d66446Ac1B6D2C35BFC143F7DF0BfAf5b1f42f',
        value: '20000000000000000' // 0.02 ETH
      })
        .on('sending', (payload) => { console.log('Sending tx', payload) })
        .on('transactionHash', (payload) => { console.log('Tx has available', payload) })
        .on('confirmation', (payload) => { console.log('Confirmation', payload) })
        .then(tx => console.log('Tx', tx))
    }
  }, [library?.eth])

  useEffect(() => {
    logContext?.setLogs('Balance is ' + balance + ' units')
  }, [balance])

  useEffect(() => {
    logContext?.setLogs('Total tether supply is ' + totalSupply + ' units')
  }, [totalSupply])

  useEffect(() => {
    if (active) {
      getBalance()
      getTotalSupply()
    }
  }, [getBalance, getTotalSupply])

  return <StyledExamples>
    <StyledButton onClick={disconnect}> Disconnect </StyledButton>
    <Field label="Address">
      {useCutAddress(account)}
    </Field>
    <Field label="Balance">
      {balance} &equiv;
    </Field>
    <Field label="USDT Max supply">
      {totalSupply}
    </Field>
    <Field label="Transfer">
      <DonateBtn color="secondary" onClick={donate}>Send tx</DonateBtn>
    </Field>
  </StyledExamples>
}



function toDecimal(balance: string) {
  return (+balance / 1e18).toFixed(4)
}