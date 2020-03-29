import React from "react";
import { Spring } from "react-spring/renderprops";

class Background extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Spring
				config={{ friction: 0, mass: 200 }}
				from={{ transform: "translateY(-10px)" }}
				to={{ transform: "translateY(0)" }}
			>
				{spring => (
					<img
						style={spring}
						id="background"
						src={`${window.location.protocol}//${window.location.host}/background.png`}
						alt="Background"
					/>
				)}
			</Spring>
		);
	}
}

export default Background;
