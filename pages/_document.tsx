import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/ibm-plex-sans-var.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link href="/static/favicons/favicon.ico" rel="shortcut icon" />
					<link href="/static/favicons/site.webmanifest" rel="manifest" />
					<link
						href="/static/favicons/apple-touch-icon.png"
						rel="apple-touch-icon"
						sizes="180x180"
					/>
					<link
						href="/static/favicons/favicon-32x32.png"
						rel="icon"
						sizes="32x32"
						type="image/png"
					/>
					<link
						href="/static/favicons/favicon-16x16.png"
						rel="icon"
						sizes="16x16"
						type="image/png"
					/>
					<link
						color="#4a9885"
						href="/static/favicons/safari-pinned-tab.svg"
						rel="mask-icon"
					/>
					<meta content="#000000" name="theme-color" />
					<meta content="#000000" name="msapplication-TileColor" />
					<meta
						content="/static/favicons/browserconfig.xml"
						name="msapplication-config"
					/>
					{/* @ts-ignore */}
					{this.props.styleTags}
				</Head>
				<body className="bg-white dark:bg-black text-white dark:text-black">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
