import React from "react";
import { animated } from "react-spring";
import Background from "./Background";
import Islands from "./Islands";
import FairySouls from "./FairySouls";
import Footer from "./Footer";
import "./App.css";
import data from "./data.json";

String.prototype.replaceAll = function(search, replacement) {
	return this.split(search).join(replacement);
};

function App(props) {
	const [islandName, setIslandName] = React.useState(Object.keys(data)[0]);

	const [fairySoulIndex, setFairySoulIndex] = React.useState(0);

	const [fairySoulName, setFairySoulName] = React.useState(
		Object.keys(data[islandName])[fairySoulIndex]
	);

	const [fairySoulCount] = React.useState(
		Object.keys(data[islandName]).length
	);

	const [fairySoulData, setFairySoulData] = React.useState(
		data[islandName][fairySoulName]
	);

	const setFairySoul = (island, index) => {
		setFairySoulIndex(index);
		setFairySoulName(Object.keys(data[island])[index]);
		setFairySoulData(
			data[island][Object.keys(data[island])[index]]
		);
	};

	const setIsland = name => {
		setIslandName(name);
		setFairySoul(name, 0);
	};

	const [page, setPage] = React.useState("islands");

	return (
		<React.Fragment>
			<Background />
			<div id="body">
				{page === "islands" ? (
					<Islands
						setIsland={setIsland}
						islandName={islandName}
						setPage={setPage}
						setFairySoul={setFairySoul}
					/>
				) : (
					<FairySouls
						setIsland={setIsland}
						islandName={islandName}
						setFairySoul={setFairySoul}
						fairySouls={Object.keys(data[islandName])}
						fairySoulIndex={fairySoulIndex}
						fairySoulCount={fairySoulCount}
						fairySoulName={fairySoulName}
						fairySoulData={fairySoulData}
						setPage={setPage}
					/>
				)}
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default animated(App);
