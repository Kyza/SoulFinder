import React from "react";

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer>
				<div className="left">Made with 🤍 and React</div>
				<div className="right">
					<a
						id="github"
						className="social"
						href="https://github.com/KyzaGitHub/SoulFinder"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={`${window.location.protocol}//${window.location.host}/github.png`} alt="GitHub" />
					</a>
					<a
						id="discord"
						className="social"
						href="https://discord.gg/c9ESSur"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={`${window.location.protocol}//${window.location.host}/discord.svg`} alt="Discord" />
					</a>
				</div>
			</footer>
		);
	}
}

export default Footer;
