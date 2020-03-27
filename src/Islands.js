import React from "react";
import { animated } from "react-spring";
import { Trail } from "react-spring/renderprops";
import Island from "./Island";
import data from "./data.json";

function Islands() {
	const islands = Object.keys(data).map((islandName, index) => (
		<Island
			key={index}
			islandName={islandName}
			fairySouls={data[islandName]}
		/>
	));
	return (
		<div id="islands">
			<Trail
				items={islands}
				from={{
					transform: "translateY(-5%)",
					opacity: 0
				}}
				to={{
					transform: "translateY(0)",
					opacity: 1
				}}
			>
				{item => trail => <div style={trail}>{item}</div>}
			</Trail>
		</div>
	);
}

export default animated(Islands);
