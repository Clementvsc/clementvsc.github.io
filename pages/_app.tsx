import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Head from 'next/head'

// Configure Inter font
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-br from-blue-50 via-purple-100 to-white min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <main className="container mx-auto px-4 py-8 max-w-4xl text-center">
            <Component {...pageProps} />
          </main>
        </div>
      </body>
    </div>
  )
}

export default MyApp
