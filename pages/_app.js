import { ChainId} from  '@thirdweb-dev/react'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Rinkeby}
      chainRpc={{
        [ChainId.Rinkeby]:'https://rinkeby.infura.io/v3/84ace407d7b34b27960fe5dfc1928d1a'
      }}
      >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
