import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./Background";
import HomePanel from "./HomePanel";
import IslandPanel from "./IslandPanel";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import "./css/App.css";
import "./css/Link.css";
import data from "./data.json";

function formatID(str) {
	return str.replace(/[^0-9a-z]/gi, "");
}

function formatImage(str) {
	return `${str.replace(/ /gi, "-").replace(/[^-0-9a-z]/gi, "").toLowerCase()}.png`;
}

for (let i = 0; i < data.islands.length; i++) {
	data.islands[i].id = formatID(
		data.islands[i].name
	);
	data.islands[i].image = formatImage(
		data.islands[i].name
	);
	for (let j = 0; j < data.islands[i].fairySouls.length; j++) {
		data.islands[i].fairySouls[j].id = formatID(
			data.islands[i].fairySouls[j].name
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Background />
				<Router>
					<Switch>
						<Route exact path="/">
							<HomePanel />
						</Route>
						{data.islands.map((island, index) => (
							<Route
								key={`island-panel-${index}`}
								path={`/${island.id}`}
							>
								<IslandPanel island={island} />
							</Route>
						))}
						<Route path="*">
							<PageNotFound />
						</Route>
					</Switch>
				</Router>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
