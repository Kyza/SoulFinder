class Islands extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="islands">
				{Object.keys(data).map(islandName => (
					<Island islandName={islandName} fairySouls={data[islandName]} />
				))}
			</div>
		);
	}
}
