class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="navigation">
				<div
					id="home"
					class="navigation-item clickable"
					onClick={() => {
						ReactDOM.render(
							<App />,
							document.getElementById("root")
						);
					}}
				>
					Home
				</div>
				{this.props.fairySouls.map((fairySoul, index) => (
					<NavigationItem
						fairySoulName={fairySoul}
						setFairySoul={this.props.setFairySoul}
						fairySoulIndex={index}
					/>
				))}
			</div>
		);
	}
}
