import type { NextPage } from 'next'
import { Screen } from '../src/components/Screen/Screen'
import { LogProvider } from '../src/context/Log.context'

const Home: NextPage = () => {
  return (
    <LogProvider>
      <Screen />
    </LogProvider>
  )
}

export default Home
