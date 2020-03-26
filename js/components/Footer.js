class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer>
				<div class="left">Made with 🤍 and React</div>
				<div class="right">
					<img
						class="clickable"
						src="./images/discord.svg"
						alt="Discord"
					/>
				</div>
			</footer>
		);
	}
}
