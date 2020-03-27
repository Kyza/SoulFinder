import React from "react";

String.prototype.replaceAll = function(search, replacement) {
	return this.split(search).join(replacement);
};

function Background(props) {
	return <img id="background" src="./background.png" alt="Background Image" />;
}

export default Background;
