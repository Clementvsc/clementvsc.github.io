import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Fonts - Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Favicon and Meta */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Clement Vsc - DevOps Engineer & Cloud Solutions Architect Portfolio" />
        <title>Clement Vsc - DevOps Engineer & Cloud Solutions Architect</title>
        
        {/* Custom CSS for smooth scrolling and font */}
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
            font-family: 'Inter', sans-serif;
          }
          
          body {
            font-family: 'Inter', sans-serif;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #3b82f6;
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #2563eb;
          }
          
          /* Dark mode scrollbar */
          .dark ::-webkit-scrollbar-track {
            background: #374151;
          }
          
          .dark ::-webkit-scrollbar-thumb {
            background: #60a5fa;
          }
          
          .dark ::-webkit-scrollbar-thumb:hover {
            background: #3b82f6;
          }
        `}</style>
      </Head>
      
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
