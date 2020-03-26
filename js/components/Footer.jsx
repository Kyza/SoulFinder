class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer>
				<div class="left">Made with 🤍 and React</div>
				<div class="right">
					<a
						id="github"
						class="social"
						href="https://github.com/KyzaGitHub/SoulFinder"
						target="_blank"
					>
						<img src="./images/github.png" alt="GitHub" />
					</a>
					<a
						id="discord"
						class="social"
						href="https://discord.gg/c9ESSur"
						target="_blank"
					>
						<img src="./images/discord.svg" alt="Discord" />
					</a>
				</div>
			</footer>
		);
	}
}
