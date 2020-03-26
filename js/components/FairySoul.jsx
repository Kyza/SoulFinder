class FairySoul extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return this.props.fairySoulData ? (
			<div class="card soul">
				<h1>{this.props.fairySoulName}</h1>
				{this.props.fairySoulData.description ? (
					<p>{this.props.fairySoulData.description}</p>
				) : (
					""
				)}
				{this.props.fairySoulData.items ? (
					<table>
						<tr>
							<th colspan={this.props.fairySoulData.items.length}>
								Items Needed
							</th>
						</tr>
						<tr>
							{this.props.fairySoulData.items.map(item => (
								<td>{item}</td>
							))}
						</tr>
					</table>
				) : (
					""
				)}
				<iframe
					src={`https://www.youtube-nocookie.com/embed/${this.props.fairySoulData.video}?controls=0&autoplay=1&color=white&disablekb=1&loop=1&fs=0&modestbranding=1&showinfo=0&mute=1`}
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		) : (
			""
		);
	}
}
