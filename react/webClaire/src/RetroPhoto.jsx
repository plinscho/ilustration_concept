import React from "react";
import * as Buttons from "./buttons";

const RetroPhoto = ({ image, caption, id }) => {
	return (
		<article
			style={{
				maxWidth: "300px",
				margin: "20px auto",
				border: "5px solid #000",
				borderRadius: "10px",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
				textAlign: "center",
				backgroundColor: "#fff",
			}}
		>
			<div>
				<img
					src={image}
					alt={caption}
					style={{
						width: "100%",
						height: "auto",
						maxHeight: "400px",
						objectFit: "cover",
						borderBottom: "5px solid #000",
					}}
				/>
				<div style={{ padding: "10px" }}>
					<strong>{caption || "No Caption"}</strong>
					<span style={{ display: "block", marginTop: "5px", color: "#555" }}>
						@{id}
					</span>
				</div>
				<div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
					<Buttons.ButtonLike />
					<Buttons.ButtonComment />
				</div>
			</div>
		</article>
	);
};

export default RetroPhoto;