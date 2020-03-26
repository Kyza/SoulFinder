class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="navigation">
				<div class="left">
					<span
						id="home"
						class="navigation-item nav-medium clickable margin-right"
						onClick={() => {
							ReactDOM.render(
								<Islands />,
								document.getElementById("body")
							);
						}}
					>
						Home
					</span>
					<span
						id="island-previous"
						class="navigation-item clickable"
					>
						Previous
					</span>
					<span id="island-name" class="navigation-item nav-medium">
						{this.props.islandName}
					</span>
					<span id="island-next" class="navigation-item clickable">
						Next
					</span>
				</div>
				<div class="center nav-medium">
					{this.props.fairySoulIndex + 1} /{" "}
					{this.props.fairySoulCount}
				</div>
				<div class="right">
					{this.props.fairySoulIndex == 0 ? (
						""
					) : (
						<span
							id="fairy-soul-previous"
							class="navigation-item clickable"
							onClick={this.props.previousFairySoul}
						>
							Previous
						</span>
					)}
					<span
						id="fairy-soul-name"
						class="navigation-item nav-medium"
					>
						{this.props.fairySoulName}
					</span>
					{this.props.fairySoulIndex ==
					this.props.fairySoulCount - 1 ? (
						""
					) : (
						<span
							id="fairy-soul-next"
							class="navigation-item clickable"
							onClick={this.props.nextFairySoul}
						>
							Next
						</span>
					)}
				</div>
			</div>
		);
	}
}
