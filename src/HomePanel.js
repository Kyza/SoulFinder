import React from "react";
import { Trail } from "react-spring/renderprops";
import IslandCard from "./IslandCard";
import data from "./data.json";

class HomePanel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const islands = data.islands.map((island, index) => (
			<IslandCard key={`island-card-${index}`} island={island} />
		));
		return (
			<div id="home-panel">
				<Trail
					keys={item => `${item.key}-spring`}
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
}

export default HomePanel;
