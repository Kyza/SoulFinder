import React from "react";
import { Spring } from "react-spring/renderprops";
import Checkbox from "./Checkbox";
import "./css/FairySoulCard.css";

class FairySoulCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
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
					<div style={spring} className="fairySoul-card">
						{this.props.fairySoul ? (
							<React.Fragment>
								<Checkbox
									island={this.props.island}
									fairySoul={this.props.fairySoul}
									setCompletedFairySoul={this.props.setCompletedFairySoul}
									completedFairySouls={
										this.props.completedFairySouls
									}
									text={this.props.fairySoul.name}
								/>
								{this.props.fairySoul.description ? (
									<p>{this.props.fairySoul.description}</p>
								) : (
									""
								)}
								<table>
									<thead>
										<tr>
											<th colSpan="3">
												Coordinates (X Y Z)
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												{this.props.fairySoul.coords.x}
											</td>
											<td>
												{this.props.fairySoul.coords.y}
											</td>
											<td>
												{this.props.fairySoul.coords.z}
											</td>
										</tr>
									</tbody>
								</table>
								{this.props.fairySoul.items ? (
									<table>
										<thead>
											<tr>
												<th
													colSpan={
														this.props.fairySoul
															.items.length
													}
												>
													Items/Effects Needed
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												{this.props.fairySoul.items.map(
													(item, index) => (
														<td key={index}>
															{item}
														</td>
													)
												)}
											</tr>
										</tbody>
									</table>
								) : (
									""
								)}

								{this.props.fairySoul.video ? (
									<iframe
										title="YouTube"
										src={`https://www.youtube-nocookie.com/embed/${this.props.fairySoul.video}?controls=0&autoplay=1&color=white&disablekb=1&loop=1&fs=0&modestbranding=1&showinfo=0&mute=1`}
										frameBorder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								) : (
									<h2>Video coming soon...</h2>
								)}
							</React.Fragment>
						) : (
							<h1>Select a fairy soul.</h1>
						)}
					</div>
				)}
			</Spring>
		);
	}
}

export default FairySoulCard;
