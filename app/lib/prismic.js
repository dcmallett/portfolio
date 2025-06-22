// Connect to your Prismic repository
import * as prismic from "@prismicio/client";

const client = prismic.createClient("dans-portfolio", {
	accessToken: "aFh8khAAACAArYgi", // Optional if your repo is private
});

// Fetch documents
export async function getDocuments() {
	const documents = await client.getAllByType("your-custom-type");
	return documents;
}

// use this for logging int prismic from terminal npm run slicemachine
