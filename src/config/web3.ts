import Web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

enum chainIds {
    RINKEBY = 4
}

const connector = new InjectedConnector({ supportedChainIds: [chainIds.RINKEBY]})

const getLibrary = (provider: any) => {
    return new Web3(provider)
}

export { connector, getLibrary}