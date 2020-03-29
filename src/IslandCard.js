import React from "react";
import { Link } from "react-router-dom";
import "./css/IslandCard.css";

class IslandCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link
				to={`/${this.props.island.id}`}
				className="island-card"
			>
				<h1>{this.props.island.name}</h1>
				<img
					src={this.props.island.image}
					alt={this.props.island.name}
				/>
			</Link>
		);
	}
}

export default IslandCard;
