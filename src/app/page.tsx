import Link from "next/link";

const features = [
	{
		name: "Suspense",
		description: "Declaratively manage async data fetching",
		href: "/suspense",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<h1 className="text-4xl font-bold">Hello World</h1>
				<ul className="flex flex-col space-y-4">
					{features.map((feature) => (
						<li key={feature.href}>
							<Link
								href={feature.href}
								className="text-blue-600 hover:underline"
							>
								{feature.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
