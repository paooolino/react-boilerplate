/*
	external imports
*/

import React from 'react';
import ReactDOM from 'react-dom';

/*
	internal imports
*/

import MyComponent from './components/MyComponent';

/*
	app render
*/

ReactDOM.render(
	<MyComponent someData="Jordan" />,
	document.querySelectorAll('#rootElement')[0]
);
