import React from "react";
import * as Buttons from "./buttons";

const Ilustration = ({ image, caption, id }) => {
    return (
        <article className="ilustration">
            <div>
                <img
                    src={image}
                    alt={caption || "No Caption"}
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div>
                <strong>{caption || "No Caption"}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <Buttons.ButtonLike />
                <Buttons.ButtonComment />
            </div>
        </article>
    );
};

export default Ilustration;