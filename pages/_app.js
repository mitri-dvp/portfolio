import '../styles/globals.css'
import { ModalProvider } from '../context/ModalContext'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
