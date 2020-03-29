import React from "react";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";

class NavigationItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let checked = false;
		if (this.props.completedFairySouls[this.props.island.id]) {
			checked = this.props.completedFairySouls[this.props.island.id][
				this.props.fairySoul.id
			];
		}

		return (
			<Spring
				to={{
					backgroundColor:
						this.props.selectedFairySoul ===
						this.props.fairySoulIndex
							? "rgba(0, 50, 100, 0.4)"
							: "rgba(0, 0, 0, 0)",
					paddingLeft:
						this.props.selectedFairySoul ===
						this.props.fairySoulIndex
							? "50px"
							: "20px",
					border: checked
						? "5px solid rgba(0, 50, 100, 0.4)"
						: "5px solid rgba(0, 0, 0, 0)"
				}}
			>
				{spring => (
					<Link
						style={spring}
						to={`/${this.props.island.id}/${this.props.fairySoul.id}`}
						className="navigation-item"
						onClick={() => {
							this.props.selectFairySoul(
								this.props.fairySoulIndex
							);
						}}
					>
						{this.props.fairySoul.name}
					</Link>
				)}
			</Spring>
		);
	}
}

export default NavigationItem;
