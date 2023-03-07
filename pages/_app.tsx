import '../styles/globals.scss'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import 'swiper/css';
import '../styles/swiperStyles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Script
            src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
            strategy="beforeInteractive"
        />
        <Script
            src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
            // strategy="beforeInteractive"
        />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
