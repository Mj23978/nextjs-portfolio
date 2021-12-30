import Container from "components/Container";

function Error({ statusCode }: { statusCode: number }) {
	let errorMessage = '';

	switch (statusCode) {
		case 400:
			errorMessage = 'Bad Request';
			break;
		case 401:
			errorMessage = 'Unauthorised';
			break;
		case 403:
			errorMessage = 'Forbidden';
			break;
		case 404:
			errorMessage = 'Page Not Found';
			break;
		case 405:
			errorMessage = 'Method Not Allowed';
			break;
		case 500:
			errorMessage = 'Internal Server Error';
			break;
		case 502:
			errorMessage = 'Bad Gateway';
			break;
		case 503:
			errorMessage = 'Service Unavailable';
			break;
		default:
			errorMessage = 'Internal Server Error';
			break;
	}

	return (
		<Container>
			<div className="flex flex-row justify-center items-center my-32">
				<h1 className="font-normal text-black dark:text-white">{statusCode}</h1>
				<div className="ml-4 pt-4 pb-4 px-4 border-l-2 border-l-['solid'] dark:border-white border-black text-black dark:text-white">
					{errorMessage}.
				</div>
			</div>
		</Container>
	);
}

Error.getInitialProps = ({ res, err }: any) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
