import React from "react";

function Footer() {
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
					<img src="./github.png" alt="GitHub" />
				</a>
				<a
					id="discord"
					className="social"
					href="https://discord.gg/c9ESSur"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="./discord.svg" alt="Discord" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
