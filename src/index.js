import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from "react-redux";

//Networking
import Connection from "./Networking/Connection";
import { connectionActionTypes } from "./Networking/ConnectionActions";

//Config
import Config from "./config/config.json";

const initialState = {
	networkConnection: null
}

const reducer = (state = initialState, action) => {
	switch(action.type)
	{
		case connectionActionTypes.INIT_SOCKET_CONNECTION:
		{
			var conn = new Connection(Config.server.ip, Config.server.port);
			return {...state, networkConnection: conn};
		}

		default: return state;
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
