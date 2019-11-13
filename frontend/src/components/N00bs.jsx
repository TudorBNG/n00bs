import React from 'react';
import logo from '../components/logo192.png';

export default class N00bs extends React.Component{

    render(){
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
        
                <div>This is our React template</div>
              </header>
            </div>
        )
    }
}