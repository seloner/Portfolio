import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>George Kalogeorpoulos</title>
			</Head>
			<ThemeProvider attribute='class' enableColorScheme={false}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
