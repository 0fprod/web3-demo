import { Web3ReactProvider } from '@web3-react/core'
import type { NextPage } from 'next'
import { Screen } from '../src/components/Screen/Screen'
import { getLibrary } from '../src/config/web3'
import { LogProvider } from '../src/context/Log.context'

const Home: NextPage = () => {
  return (
    <LogProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Screen />
      </Web3ReactProvider>
    </LogProvider>
  )
}

export default Home
