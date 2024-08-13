const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
	await sleep(2000);
	return Response.json({
		message: "Hello World",
	});
};
