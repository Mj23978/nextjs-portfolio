import GithubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth';

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	callbacks: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		redirect({ url, baseUrl }) {
      // console.log(baseUrl + '/auth/redirect');
      // return baseUrl + '/auth/redirect';
			if (url.startsWith(baseUrl)) return url;
			else if (url.startsWith('/')) return new URL(url, baseUrl).toString();
			return baseUrl;
		},
	},
	secret: process.env.AUTH_SECRET,
});
