import React from "react";
import { Spring } from "react-spring/renderprops";

function Checkbox(props) {
	const [isChecked, setChecked] = React.useState(false);

	return (
		<div
			className="checkbox clickable"
			onClick={() => {
				setChecked(!isChecked);
			}}
		>
			<div className="checkbox-box">
				<Spring
					to={{
                        width: "25px",
                        height: "5px",
						transform: isChecked
							? "translateX(6px) translateY(12px) rotate(-45deg)"
							: "translateX(2.5px) translateY(12.5px) rotate(45deg)"
					}}
				>
					{spring => <div className="checkbox-line"  style={spring}></div>}
				</Spring>
                <Spring
					to={{
                        width: isChecked ? "15px" : "25px",
                        height: "5px",
						transform: isChecked
							? "translateX(0px) translateY(10px) rotate(45deg)"
							: "translateX(2.5px) translateY(7.5px) rotate(-45deg)"
					}}
				>
					{spring => <div className="checkbox-line"  style={spring}></div>}
				</Spring>
			</div>
			<h1 className="checkbox-text">{props.text}</h1>
		</div>
	);
}

export default Checkbox;
