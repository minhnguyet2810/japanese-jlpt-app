import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../src/app/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Japanese JLPT App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="app-root" style={{ minHeight: '100vh' }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

