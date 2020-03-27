class NavigationItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				class={`navigation-item clickable${this.props.fairySoulSelected == this.props.fairySoulIndex ? " navigation-selected" : ""}`}
				onClick={() => {
					this.props.setFairySoul(this.props.fairySoulIndex);
				}}
			>
				<span>{this.props.fairySoulName}</span>
			</div>
		);
	}
}
