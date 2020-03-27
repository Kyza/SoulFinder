import React from "react";
import { animated } from "react-spring";
import { Trail } from "react-spring/renderprops";
import Island from "./Island";
import data from "./data.json";

function Islands(props) {
	const islands = Object.keys(data).map((thisIslandName, index) => (
		<Island
			key={"islands-" + index}
			setIsland={props.setIsland}
			islandName={props.islandName}
			thisIslandName={thisIslandName}
			setFairySoul={props.setFairySoul}
			fairySouls={data[thisIslandName]}
			setPage={props.setPage}
		/>
	));
	return (
		<div id="islands">
			<Trail
				keys={item => item.key}
				config={{ tension: 450, friction: 35 }}
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
