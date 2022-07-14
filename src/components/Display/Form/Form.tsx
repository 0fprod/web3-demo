import { StyledForm, StyledTextField } from "./Form.styled"
import { useCallback, useContext, useEffect, useState } from "react";
import { StyledButton } from "../Display.styled"
import { useWeb3React } from "@web3-react/core"
import { Field } from "./Field/Field"
import Web3 from "web3";
import { LogContext } from "../../../context/Log.context";


export const Form: React.FC = () => {
  const [balance, setBalance] = useState('')
  const { active, account, deactivate, library } = useWeb3React<Web3>()
  const logContext = useContext(LogContext)

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
      logContext?.setLogs('Balance is ' + balance + ' units')

    }
  }, [library?.eth])

  useEffect(() => {
    if (active) {
      getBalance()
    }
  }, [getBalance])

  return <StyledForm>
    <StyledButton onClick={disconnect}> Disconnect </StyledButton>
    <Field label="Account address">
      {trimAccountAddress(account)}
    </Field>
    <Field label="Account balance">
      {balance} ETH
    </Field>
    <Field label="Donate to">
      <StyledTextField />
    </Field>
    <div>
      <StyledButton> Send </StyledButton>
    </div>
  </StyledForm>
}

type Address = string | null | undefined;

function trimAccountAddress(address: Address): string {
  if (!address) return '';

  const start = address.substring(0, 6);
  const end = address
    .split('')
    .reverse()
    .join('')
    .substring(0, 4)

  return `${start}...${end}`
}

function toDecimal(balance: string) {
  return (+balance / 1e18).toFixed(4)
}