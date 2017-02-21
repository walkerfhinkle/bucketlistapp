import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './components/app';

var createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(redurcers)}>
		<App />
	</Provider>
	, document.querySelector('.container'));