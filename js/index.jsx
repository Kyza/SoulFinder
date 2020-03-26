String.prototype.replaceAll = function(search, replacement) {
	return this.split(search).join(replacement);
};

let data = {
	"The Hub": {
		"The Bank": {
			coords: {
				x: 0,
				y: 0,
				z: 0
			},
			video: "e2kHdywdJTY",
			items: ["Grappling Hook", "Ender Pearl"],
			description:
				"Use a grappling hook or an ender pearl to get to the top of The Bank."
		},
		"The Mayor's House": {
			coords: {
				x: 0,
				y: 0,
				z: 0
			},
			video: "e2kHdywdJTY",
			description:
				"Behind the flames in the fireplace."
		},
	},
	"The Barn": {},
	"Mushroom Desert": {},
	"Gold Mine": {},
	"Deep Caverns": {},
	"Spider's Den": {},
	"Blazing Fortress": {},
	"The End": {},
	"The Park": {},
	"Jerry's Workshop": {}
};

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div id="body">
					<Islands />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
