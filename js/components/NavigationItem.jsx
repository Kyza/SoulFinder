class NavigationItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				class="navigation-item clickable"
				onClick={() => {
					this.props.setFairySoul(this.props.fairySoulIndex);
				}}
			>
				{this.props.fairySoulName}
			</div>
		);
	}
}
