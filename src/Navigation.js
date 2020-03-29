import React from "react";
import { Spring, Trail } from "react-spring/renderprops";
import NavigationItem from "./NavigationItem";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const fairySouls = [
			<Link
				to="/"
				id="home"
				className="navigation-item"
				key={`navigation-item-home`}
			>
				Home
			</Link>,
			...this.props.island.fairySouls.map((fairySoul, index) => (
				<NavigationItem
					key={`navigation-item-${index}`}
					completedFairySouls={this.props.completedFairySouls}
					selectFairySoul={this.props.selectFairySoul}
					selectedFairySoul={this.props.selectedFairySoul}
					island={this.props.island}
					fairySoul={fairySoul}
					fairySoulIndex={index}
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
							keys={item => `${item.key}-trail`}
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
}

export default Navigation;
