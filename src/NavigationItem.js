import React from "react";
import { animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

function NavigationItem(props) {
	return (
		<Spring
			to={{
				backgroundColor:
					props.fairySoulSelected === props.fairySoulIndex
						? "rgba(0, 50, 100, 0.4)"
						: "rgba(0, 0, 0, 0)",
				paddingLeft:
					props.fairySoulSelected === props.fairySoulIndex
						? "40px"
						: "20px"
			}}
		>
			{spring => (
				<div
					style={spring}
					className={`navigation-item clickable${
						props.fairySoulSelected === props.fairySoulIndex
							? " navigation-selected"
							: ""
					}`}
					onClick={() => {
						props.setFairySoul(
							props.islandName,
							props.fairySoulIndex
						);
					}}
				>
					<span>{props.fairySoulName}</span>
				</div>
			)}
		</Spring>
	);
}

export default animated(NavigationItem);
