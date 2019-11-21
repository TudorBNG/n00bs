import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import './styles/styles.scss';
import './styles/fonts/coolvetica-rg.ttf';
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<LoadingPage />, document.getElementById('root'));
ReactDOM.render(<HomePage />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
