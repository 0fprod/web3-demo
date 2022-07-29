import { StyledForm, StyledTextField } from "./Examples.styled"
import { useCallback, useContext, useEffect, useState } from "react";
import { StyledButton } from "../Display.styled"
import { useWeb3React } from "@web3-react/core"
import { Field } from "./Field/Field"
import Web3 from "web3";
import { LogContext } from "../../../context/Log.context";
import { useCutAddress } from "../../../hooks/useCutAddress";
import { useTether } from "../../../hooks/useTether";


export const Examples: React.FC = () => {
  const [balance, setBalance] = useState('')
  const [totalSupply, setTotalSupply] = useState(0)
  const { active, account, deactivate, library } = useWeb3React<Web3>()
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

  return <StyledForm>
    <StyledButton onClick={disconnect}> Disconnect </StyledButton>
    <Field label="Address">
      {useCutAddress(account)}
    </Field>
    <Field label="Balance">
      {balance} &equiv;
    </Field>
    <Field label="USDT Max supply:">
      {totalSupply} </Field>
  </StyledForm>
}



function toDecimal(balance: string) {
  return (+balance / 1e18).toFixed(4)
}