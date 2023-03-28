import { CafeteriaProvider } from '@/context/CafeteriaProvider'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
      <CafeteriaProvider>
          <Component {...pageProps} />
      </CafeteriaProvider>
  )
}
