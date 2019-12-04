import React, { Component } from 'react';
import HeaderNavbar from './navbars/HeaderNavbar';
import Sidebar from './navbars/Sidebar';
import '../styles/components/HomePage.scss';
import GameCard from './GameCard';


export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.getGames = this.getGames.bind(this);
  }

  state = {
    gamesList: []
  };

  componentDidMount() {
    console.log("compodidmount");
    // fetch('http://localhost:8080/backend/noobs-api/game/all')
    //   .then(res => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     this.setState(()=> {return {gamesList:data};} )
    //     //this.state.gamesList = data;
    //   })
    //   .catch(console.log());
      this.getGames()
      .then((data)=>{
        this.setState({
          gamesList: data
        })
      })
      .catch(err=>console.log(err))
      console.log(this.state.gamesList)
  }

  getAllGames=()=>{
    fetch('http://localhost:8080/backend/noobs-api/game/all')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.setState(()=> {return {gamesList:data};} )
      //this.state.gamesList = data;
    })
    .catch(console.log());
  }

  getGames() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/backend/noobs-api/game/all')
            .then(res => res.json())
            .then((data) => {
                resolve(JSON.stringify(data));
            })
            .catch(err => reject(err));
    })
}


  render() {

    const games = this.state.gamesList;
    //const games = ["metin","heartstone","barbie"];
    return (
      <div className="Full-view">
        <div className="App-Container">
          <div className="App-header">
            <HeaderNavbar />
          </div>
          <div className="App-body">
            <Sidebar />
          
          <div className="Games-view">
            {console.log(games)}
            {this.state.gamesList!=null ? 
            <GameCard game={this.state.gamesList[1].creator}/>
          : <div>nop</div>
          }
           {/* <GameCard game={games[2]}/>
            <GameCard game={games[0]}/>
            <GameCard game={games[1]}/> */}


            
            {/* <GameCard game={this.state.gamesList[0].name}/> */}
    {/* {games && <GameCard game={games[0]["name"]}/> }   
            <GameCard game={this.state.gamesList[1].name}/>} */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}