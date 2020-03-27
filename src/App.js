import React from "react";
import { animated } from "react-spring";
import Islands from "./Islands";
import Footer from "./Footer";
import "./App.css";

String.prototype.replaceAll = function(search, replacement) {
	return this.split(search).join(replacement);
};

function App(props) {
	return (
		<React.Fragment>
			<Islands />
			<Footer />
		</React.Fragment>
	);
}

export default animated(App);
