import { UnsupportedChainIdError, useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { StyledButton, StyledDisplay } from "./Display.styled";
import { Examples } from './Examples/Examples'
import { connector } from '../../config/web3'
import { useCallback, useContext, useEffect } from "react";
import { LogContext } from "../../context/Log.context";

export const Display: React.FC = () => {
	const { active, activate, error, } = useWeb3React()
	const isUnsupportedChain = error instanceof UnsupportedChainIdError
	const logContext = useContext(LogContext)

	const connect = useCallback(() => {
		activate(connector)
		localStorage.setItem('wasConnected', 'true')
		logContext?.setLogs('Connected')

	}, [activate])

	useEffect(() => {
		if (localStorage.getItem('wasConnected') === 'true') {
			logContext?.setLogs('Restoring connection...')
			connect()
		}
	}, [connect])

	return <StyledDisplay>
		{
			active ? <Examples /> :
				<StyledButton variant="contained" onClick={connect} disabled={isUnsupportedChain}>
					{isUnsupportedChain ? 'Unsupported network' : 'Connect'}
				</StyledButton>
		}

	</StyledDisplay>
}