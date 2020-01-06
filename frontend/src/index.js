import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import './styles/styles.scss';
import './styles/fonts/coolvetica-rg.ttf';
import { firebase } from './firebase/firebase';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//ReactDOM.render(<LoadingPage />, document.getElementById('root'));
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/game-page" component={GamePage}/>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));


// firebase.auth().onAuthStateChanged((user) => {
//     console.log(user);
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
