import React from "react";
import Navigation from "./Navigation";
import FairySoul from "./FairySoul";
import data from "./data.json";

class FairySouls extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fairySoulIndex: 0
		};

		this.state.fairySoulName = Object.keys(data[this.props.islandName])[
			this.state.fairySoulIndex
		];

		this.state.fairySoulCount = Object.keys(
			data[this.props.islandName]
		).length;

		this.state.fairySoulData =
			data[this.props.islandName][this.state.fairySoulName];
	}

	setFairySoul = index => {
		this.setState({ fairySoulIndex: index });
		this.setState({
			fairySoulName: Object.keys(data[this.props.islandName])[index]
		});
		this.setState({
			fairySoulData:
				data[this.props.islandName][
					Object.keys(data[this.props.islandName])[index]
				]
		});
	};

	render() {
		return (
			<div id="souls">
				<Navigation
					setFairySoul={this.setFairySoul}
					fairySouls={Object.keys(data[this.props.islandName])}
					fairySoulIndex={this.state.fairySoulIndex}
					fairySoulCount={this.props.fairySoulCount}
					fairySoulName={this.state.fairySoulName}
				/>
				<FairySoul
					fairySoulName={this.state.fairySoulName}
					fairySoulData={this.state.fairySoulData}
				/>
			</div>
		);
	}
}

export default FairySouls;
