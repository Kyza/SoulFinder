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
			description: "Behind the flames in the fireplace."
		}
	},
	"The Barn": {
		"East Aqueduct": {
			coords: {
				x: 182,
				y: 99,
				z: -235
			},
			description: "In the East Aqueduct."
		},
		"Windmill 1": {
			coords: {
				x: 96,
				y: 96,
				z: -287
			},
			items: ["Ender Pearl"],
			description: "On the 3rd floor of the Windmill."
		},
		"Windmill 2": {
			coords: {
				x: 99,
				y: 112,
				z: -274
			},
			items: ["Ender Pearl"],
			description: "On the sail of the Windmill."
		},
		Chimney: {
			coords: {
				x: 96,
				y: 96,
				z: -287
			},
			items: ["Grappling Hook", "Ender Pearl"],
			description: "Next to the front chimney on top of the barn."
		},
		"East Mountains": {
			coords: {
				x: 183,
				y: 99,
				z: -304
			},
			description: "Behind the east mountains."
		},
		"West Mountains": {
			coords: {
				x: 157,
				y: 23,
				z: -202
			},
			description: "Inside the water coming from the west mountain."
		},
		"The Root": {
			coords: {
				x: 157,
				y: 23,
				z: -202
			},
			description:
				"At the lowest point of root at the south of the island."
		}
	},
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
