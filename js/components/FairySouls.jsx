class FairySouls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fairySoulIndex: 0
		};
		this.state.fairySoulName = Object.keys(data[this.props.islandName])[
			this.state.fairySoulIndex
		];
		this.props.fairySoulCount = Object.keys(
			data[this.props.islandName]
		).length;
	}

	previousFairySoul = () => {
		let newIndex = this.state.fairySoulIndex - 1;
		this.setState({ fairySoulIndex: newIndex });
		this.setState({
			fairySoulName: Object.keys(data[this.props.islandName])[newIndex]
		});
	};

	nextFairySoul = () => {
		let newIndex = this.state.fairySoulIndex + 1;
		this.setState({ fairySoulIndex: newIndex });
		this.setState({
			fairySoulName: Object.keys(data[this.props.islandName])[newIndex]
		});
	};

	render() {
		return (
			<div id="souls">
				<Navigation
					previousFairySoul={this.previousFairySoul}
					nextFairySoul={this.nextFairySoul}
					fairySoulIndex={this.state.fairySoulIndex}
					fairySoulCount={this.props.fairySoulCount}
					islandName={this.props.islandName}
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
