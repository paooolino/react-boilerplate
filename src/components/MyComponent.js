/*
	external imports
*/

import React, { Component } from 'react';

/*
	internal imports
*/

// ...

/*
	component definition
*/

class MyComponent extends Component {
	render() {
		return (
			<div>
				Hello, {this.props.someData}
			</div>
		);
	}
};

export default MyComponent;
