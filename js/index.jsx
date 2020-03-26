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
				"Use a grappling hook or an ender pearl to get to the top of the bank."
		},
		"The Bank 2": {
			coords: {
				x: 5,
				y: 5,
				z: 5
			},
			video: "e2kHdywdJTY",
			description:
				"Use a grappling hook or an ender pearl to get to the top of The Bank 2."
		},
		"The Bank 3": {
			coords: {
				x: 5,
				y: 5,
				z: 5
			},
			video: "e2kHdywdJTY",
			description:
				"Use a grappling hook or an ender pearl to get to the top of The Bank 2."
		},
		"The Bank 4": {
			coords: {
				x: 5,
				y: 5,
				z: 5
			},
			video: "e2kHdywdJTY",
			description:
				"Use a grappling hook or an ender pearl to get to the top of The Bank 2."
		}
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
