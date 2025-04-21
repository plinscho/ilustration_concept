import React from "react";
import RetroPhoto from "./RetroPhoto";
import ilustrations from "./assets/json/ilustrations_info.js";

const Gallery = () => {
	const rows = [];
	const itemsPerRow = 5; // Adjust based on screen size

	// Split photos into rows
	for (let i = 0; i < ilustrations.length; i += itemsPerRow) {
		rows.push(ilustrations.slice(i, i + itemsPerRow));
	}

	return (
		<div>
			{rows.map((row, rowIndex) => (
				<div
					key={rowIndex}
					style={{
						display: "flex",
						justifyContent: "center",
						gap: "20px",
						marginBottom: "40px",
						transform: `rotateX(${rowIndex % 2 === 0 ? "10deg" : "-10deg"})`,
						transition: "transform 0.5s ease-in-out",
					}}
				>
					{row.map((photo) => (
						<RetroPhoto
							key={photo.id}
							image={photo.image}
							caption={photo.caption}
							id={photo.id}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Gallery;