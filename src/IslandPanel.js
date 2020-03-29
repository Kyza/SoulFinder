import React from "react";
import data from "./data.json";
import {
	Switch,
	Route,
	Redirect,
	matchPath
} from "react-router-dom";
import FairySoulCard from "./FairySoulCard";
import Navigation from "./Navigation";
import "./css/IslandPanel.css";

class IslandPanel extends React.Component {
	constructor(props) {
		super(props);

		let match = matchPath(window.location.pathname, {
			path: "/:islandID/:fairySoulID",
			exact: false,
			strict: false
		});

		let selectedFairySoul = 0;

		if (match) {
			match = match.params;
			const islandID = match.islandID;
			const fairySoulID = match.fairySoulID;

			for (let i = 0; i < data.islands.length; i++) {
				if (data.islands[i].id === islandID) {
					for (
						let j = 0;
						j < data.islands[i].fairySouls.length;
						j++
					) {
						if (data.islands[i].fairySouls[j].id === fairySoulID) {
							selectedFairySoul = j;
						}
					}
				}
			}
		}

		let completedFairySouls = JSON.parse(
			localStorage.getItem("completedFairySouls")
		);
		if (!completedFairySouls) {
			localStorage.setItem("completedFairySouls", JSON.stringify({}));
			completedFairySouls = JSON.parse(
				localStorage.getItem("completedFairySouls")
			);
		}

		this.state = {
			selectedFairySoul,
			completedFairySouls
		};
	}

	selectFairySoul = index => {
		this.setState({
			selectedFairySoul: index
		});
	};

	setCompletedFairySoul = (islandID, fairySoulID, state) => {
		let temp = JSON.parse(localStorage.getItem("completedFairySouls"));
		if (!temp[islandID]) {
			temp[islandID] = {};
		}
		temp[islandID][fairySoulID] = state;
		this.setState({
			completedFairySouls: temp
		});
		localStorage.setItem("completedFairySouls", JSON.stringify(temp));
	};

	render() {
		return (
			<div id="island-panel">
				<Navigation
					completedFairySouls={this.state.completedFairySouls}
					selectFairySoul={this.selectFairySoul}
					selectedFairySoul={this.state.selectedFairySoul}
					island={this.props.island}
				/>
				<Switch>
					<Route exact path={`/${this.props.island.id}`}>
						<Redirect
							to={
								this.props.island.fairySouls.length > 0
									? `/${this.props.island.id}/${this.props.island.fairySouls[0].id}`
									: "/"
							}
						/>
					</Route>
					{this.props.island.fairySouls.map((fairySoul, index) => (
						<Route
							key={`fairySoul-card-${index}`}
							path={`/${this.props.island.id}/${fairySoul.id}`}
						>
							<FairySoulCard
								island={this.props.island}
								fairySoul={fairySoul}
								setCompletedFairySoul={this.setCompletedFairySoul}
								completedFairySouls={
									this.state.completedFairySouls
								}
							/>
						</Route>
					))}
				</Switch>
			</div>
		);
	}
}

export default IslandPanel;
