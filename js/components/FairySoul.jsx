class FairySoul extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="card soul">
				<h1>{this.props.fairySoulName}</h1>
				{/* <p>{this.props.description}</p> */}
				{/* <iframe src={`https://www.youtube-nocookie.com/embed/${this.props.data.video}?controls=0&autoplay=1&color=white&disablekb=1&loop=1&fs=0&modestbranding=1&showinfo=0`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
			</div>
		);
	}
}
