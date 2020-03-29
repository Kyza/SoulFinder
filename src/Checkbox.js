import React from "react";
import { Spring } from "react-spring/renderprops";

class Checkbox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let checked = false;
		if (this.props.completedFairySouls[this.props.island.id]) {
			checked = this.props.completedFairySouls[this.props.island.id][this.props.fairySoul.id];
		}

		return (
			<div
				className={
					"checkbox clickable" +
					(checked ? " checked" : "")
				}
				onClick={() => {
					this.props.setCompletedFairySoul(this.props.island.id, this.props.fairySoul.id, !checked);
				}}
			>
				<div className="checkbox-box">
					<Spring
						to={{
							width: "25px",
							height: "5px",
							transform: checked
								? "translateX(6px) translateY(12px) rotate(-45deg)"
								: "translateX(2.5px) translateY(12.5px) rotate(45deg)"
						}}
					>
						{spring => (
							<div className="checkbox-line" style={spring}></div>
						)}
					</Spring>
					<Spring
						to={{
							width: checked ? "15px" : "25px",
							height: "5px",
							transform: checked
								? "translateX(0px) translateY(10px) rotate(45deg)"
								: "translateX(2.5px) translateY(7.5px) rotate(-45deg)"
						}}
					>
						{spring => (
							<div className="checkbox-line" style={spring}></div>
						)}
					</Spring>
				</div>
				<h1 className="checkbox-text">{this.props.text}</h1>
			</div>
		);
	}
}

export default Checkbox;
