import React from "react";
import { Link } from "react-router-dom";

class PageNotFound extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>404: Page Not Found</h1>
				<Link to="/">Go Home</Link>
			</div>
		);
	}
}

export default PageNotFound;
