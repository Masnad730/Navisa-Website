import SnackbarProvider from 'react-simple-snackbar'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'tailwindcss/tailwind.css'
import '../styles/nprogress.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'

import '../styles/base.css'
import '../styles/main.css'
import '../styles/grid.css'
import ScrollToTop from '../components/ScrollToTop'
import LanguageContextProvider from '../contexts/languageContext'
import UserEnquiryContextProvider from '../contexts/userEnquiryContext'

Router.events.on('routeChangeStart', (url) => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider>
      <LanguageContextProvider>
        <UserEnquiryContextProvider>
          <ScrollToTop showBelow={300} />
          <Component {...pageProps} />
        </UserEnquiryContextProvider>
      </LanguageContextProvider>
    </SnackbarProvider>
  )
}

export default MyApp
