import React from "react";
import ReactDOM from "react-dom";
import Background from "./Background";
import Footer from "./Footer";
import FairySouls from "./FairySouls";

function Island(props) {
	return (
		<div
			className="card island clickable"
			onClick={() => {
				ReactDOM.render(
					<React.Fragment>
						<Background />
						<FairySouls
							islandName={props.islandName}
							fairySouls={props.fairySouls}
						/>
						<Footer />
					</React.Fragment>,
					document.getElementById("root")
				);
			}}
		>
			<h1>{props.islandName}</h1>
			<img
				src={`./${props.islandName
					.toLowerCase()
					.replaceAll(" ", "-")}.png`}
				alt={props.islandName + " Image"}
			/>
		</div>
	);
}

export default Island;
