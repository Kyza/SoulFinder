class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer>
				<div class="left">Made with 🤍 and React</div>
				<div class="right">
					<a href="https://discord.gg/c9ESSur" target="_blank"><img
						class="clickable"
						src="./images/discord.svg"
						alt="Discord"
					/></a>
				</div>
			</footer>
		);
	}
}
