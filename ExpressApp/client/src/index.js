import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
