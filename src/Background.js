import React from "react";
import { Spring } from "react-spring/renderprops";

function Background(props) {
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
					src="./background.png"
					alt="Background"
				/>
			)}
		</Spring>
	);
}

export default Background;
