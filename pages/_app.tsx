import 'styles/global.scss';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider attribute="class">
					<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	);
}
