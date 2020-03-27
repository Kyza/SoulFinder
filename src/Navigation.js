import React from "react";
import { animated } from "react-spring";
import { Spring, Trail } from "react-spring/renderprops";
import NavigationItem from "./NavigationItem";

function Navigation(props) {
	const fairySouls = [
		<div
			id="home"
			className="navigation-item clickable"
			onClick={() => {
				props.setPage("islands");
			}}
		>
			Home
		</div>,
		...props.fairySouls.map((fairySoul, index) => (
			<NavigationItem
				key={"navigation-" + index}
				fairySoulName={fairySoul}
				islandName={props.islandName}
				setFairySoul={props.setFairySoul}
				fairySoulIndex={index}
				fairySoulSelected={props.fairySoulIndex}
			/>
		))
	];
	return (
		<Spring
			from={{ transform: "translateX(-100%)", opacity: 0 }}
			to={{ transform: "translateX(0)", opacity: 1 }}
		>
			{spring => (
				<div style={spring} id="navigation">
					<Trail
						keys={item => item.key}
						config={{ tension: 170, friction: 18 }}
						items={fairySouls}
						from={{
							transform: "translateX(-100%)",
							opacity: 0
						}}
						to={{
							transform: "translateX(0)",
							opacity: 1
						}}
					>
						{item => trail => <div style={trail}>{item}</div>}
					</Trail>
				</div>
			)}
		</Spring>
	);
}

export default animated(Navigation);
