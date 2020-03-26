class Island extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="card island clickable" onClick={() => {
                ReactDOM.render(<FairySouls islandName={this.props.islandName} fairySouls={this.props.fairySouls} />, document.getElementById("body"));
            }}>
				<h1>{this.props.islandName}</h1>
				<img src={`./images/${this.props.islandName.toLowerCase().replaceAll(" ", "-")}.png`} alt={this.props.islandName + " Image"} />
			</div>
		);
	}
}
