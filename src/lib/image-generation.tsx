import { ImageResponse } from "next/og";

// Image generation
export async function imageGeneration(feature: string) {
	// Font
	return new ImageResponse(
		// ImageResponse JSX element
		<div
			style={{
				background: "#F5F7F8",
				width: "100%",
				height: "100%",
				padding: "30px",
				display: "flex",
				alignItems: "stretch",
			}}
		>
			<div
				style={{
					flexGrow: "1",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: 40,
				}}
			>
				{feature}
			</div>
		</div>,
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			width: 1200,
			height: 630,
		},
	);
}
