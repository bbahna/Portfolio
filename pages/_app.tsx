import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/fonts/index.css';
import '@/styles/theme.css';
import '@/styles/prose.css';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
