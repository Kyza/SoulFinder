class FairySouls extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fairySoulIndex: 0,
			islandName: this.props.islandName
		};
		this.state.islandIndex = Object.keys(data).indexOf(
			this.state.islandName
		);
		this.props.islandCount = Object.keys(data).length;

		this.state.fairySoulName = Object.keys(data[this.state.islandName])[
			this.state.fairySoulIndex
		];
		this.props.fairySoulCount = Object.keys(
			data[this.state.islandName]
		).length;
	}

	setIsland = index => {
		Promise.all([
			this.setState({ islandIndex: index }),
			this.setState({
				islandName: Object.keys(data)[index]
			})
		]).then(() => {
			this.setFairySoul(0);
		});
	};

	previousIsland = () => {
		this.setIsland(this.state.islandIndex - 1);
	};

	nextIsland = () => {
		this.setIsland(this.state.islandIndex + 1);
	};

	setFairySoul = index => {
		this.setState({ fairySoulIndex: index });
		this.setState({
			fairySoulName: Object.keys(data[this.state.islandName])[index]
		});
	};

	previousFairySoul = () => {
		this.setFairySoul(this.state.fairySoulIndex - 1);
	};

	nextFairySoul = () => {
		this.setFairySoul(this.state.fairySoulIndex + 1);
	};

	render() {
		return (
			<div id="souls">
				<Navigation
					previousIsland={this.previousIsland}
					nextIsland={this.nextIsland}
					previousFairySoul={this.previousFairySoul}
					nextFairySoul={this.nextFairySoul}
					islandIndex={this.state.islandIndex}
					islandCount={this.state.islandCount}
					islandName={this.state.islandName}
					fairySoulIndex={this.state.fairySoulIndex}
					fairySoulCount={this.props.fairySoulCount}
					fairySoulName={this.state.fairySoulName}
					fairySoulData={
						data[this.props.islandName][this.state.fairySoulName]
					}
				/>
				<FairySoul
					islandName={this.state.islandName}
					fairySoulName={this.state.fairySoulName}
					fairySoulData={
						data[this.props.islandName][this.state.fairySoulName]
					}
				/>
			</div>
		);
	}
}
