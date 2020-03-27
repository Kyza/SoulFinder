import React from "react";
import Navigation from "./Navigation";
import FairySoul from "./FairySoul";
import data from "./data.json";

function FairySouls(props) {
	return (
		<div id="souls">
			<Navigation
				setPage={props.setPage}
				islandName={props.islandName}
				setFairySoul={props.setFairySoul}
				fairySouls={Object.keys(data[props.islandName])}
				fairySoulIndex={props.fairySoulIndex}
				fairySoulCount={props.fairySoulCount}
				fairySoulName={props.fairySoulName}
			/>
			<FairySoul
				fairySoulName={props.fairySoulName}
				fairySoulData={props.fairySoulData}
			/>
		</div>
	);
}

export default FairySouls;
