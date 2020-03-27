import React from "react";
import { Spring } from "react-spring/renderprops";

function Background(props) {
	return (
		<Spring
			config={{ friction: 0, mass: 100 }}
			from={{ transform: "translateY(-25px)" }}
			to={{ transform: "translateY(0)" }}
		>
			{spring => (
				<img
					style={spring}
					id="background"
					src="./background.png"
					alt="Background"
				/>
			)}
		</Spring>
	);
}

export default Background;
