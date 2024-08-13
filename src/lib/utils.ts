import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const baseURl = process.env.APP_URL
	? `https://${process.env.APP_URL}`
	: "http://localhost:3000";

export const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));
