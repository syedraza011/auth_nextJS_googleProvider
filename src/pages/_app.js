import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
 function myApp({ Component, pageProps, session }) {
  return (
    <SessionProvider >
  <Component {...pageProps} />
  
  </SessionProvider>)
}
export default myApp