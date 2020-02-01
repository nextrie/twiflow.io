import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from "react-redux";

//Networking
import Connection from "./Networking/Connection";

const initialState = {
	connectionStatus: "disconnected"
}

const reducer = (state = initialState, action) => {
	const newState = [state];

	switch(action.type)
	{
		case "ADD":
		{
			console.log("added");
		}
	}
}

const store = createStore(reducer);



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


serviceWorker.unregister();
