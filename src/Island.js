import React from "react";

function Island(props) {
	return (
		<div
			className="card island clickable"
			onClick={() => {
				props.setIsland(props.thisIslandName);
				props.setPage(props.thisIslandName);
			}}
		>
			<h1>{props.thisIslandName}</h1>
			<img
				src={`./${props.thisIslandName
					.toLowerCase()
					.replaceAll(" ", "-")}.png`}
				alt={props.thisIslandName + " Image"}
			/>
		</div>
	);
}

export default Island;
