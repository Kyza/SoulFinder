import React from "react";
import { Spring } from "react-spring/renderprops";

function FairySoul(props) {
	return props.fairySoulData ? (
		<Spring
			config={{ tension: 170, friction: 18 }}
			from={{
				transform: "translateY(10%)",
				opacity: 0
			}}
			to={{
				transform: "translateY(0)",
				opacity: 1
			}}
		>
			{spring => (
				<div style={spring} className="card soul">
					<h1>{props.fairySoulName}</h1>
					{props.fairySoulData.description ? (
						<p>{props.fairySoulData.description}</p>
					) : (
						""
					)}
					<table>
						<thead>
							<tr>
								<th colSpan="3">Coordinates (X Y Z)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{props.fairySoulData.coords.x}</td>
								<td>{props.fairySoulData.coords.y}</td>
								<td>{props.fairySoulData.coords.z}</td>
							</tr>
						</tbody>
					</table>
					{props.fairySoulData.items ? (
						<table>
							<thead>
								<tr>
									<th
										colSpan={
											props.fairySoulData.items.length
										}
									>
										Items/Effects Needed
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									{props.fairySoulData.items.map(
										(item, index) => (
											<td key={index}>{item}</td>
										)
									)}
								</tr>
							</tbody>
						</table>
					) : (
						""
					)}

					{props.fairySoulData.video ? (
						<iframe
							title="YouTube"
							src={`https://www.youtube-nocookie.com/embed/${props.fairySoulData.video}?controls=0&autoplay=1&color=white&disablekb=1&loop=1&fs=0&modestbranding=1&showinfo=0&mute=1`}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					) : (
						<h2>Video coming soon...</h2>
					)}
				</div>
			)}
		</Spring>
	) : (
		""
	);
}

export default FairySoul;
