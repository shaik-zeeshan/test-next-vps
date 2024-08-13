import { imageGeneration } from "@/lib/image-generation";

export const GET = async () => {
	return imageGeneration("Hello World");
};
