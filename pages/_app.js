import '../styles/globals.css'

import { WindowProvider } from './context/WindowContext'


function MyApp({ Component, pageProps }) {
  return (
    <WindowProvider>
      <Component {...pageProps} />
    </WindowProvider>
  )
}

export default MyApp
