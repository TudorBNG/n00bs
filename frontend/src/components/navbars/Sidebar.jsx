import React, { Component } from 'react';
import '../../styles/components/Sidebar.scss';
import IGenre from '../../models/Genre.ts';
import $ from 'jquery';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    //this.getGenres = this.getGenres.bind(this);
    //this.handleGenreClick = this.handleGenreClick.bind(this);
  }

  state = {
    genresList: [IGenre],
    clickedGenres: [],
    //lastClicked: IGenre
  };

  componentDidMount() {
    // this.getGenres()
    //   .then((res) => {
    //     this.setState({
    //       genresList: res
    //     })
    //   })
    //   .catch(err => console.log(err))

  }

  // getGenres() {
  //   return new Promise((resolve, reject) => {
  //     fetch('http://localhost:8080/backend/noobs-api/genre/all')
  //       .then(res => res.json())
  //       .then((data) => {
  //         resolve(data);
  //       })
  //       .catch(err => reject(err));
  //   })
  // }

  // createSidebar = () => {
  //   //const filters = this.state.genresList;
  //   let sidebar = [];

  //   for (let i = 0; i < this.state.genresList.length; i++) {
  //     sidebar.push(<li class={this.state.clickedGenres.includes(this.state.genresList[i].id) ? "sidebar-row row-active" : "sidebar-row"} onClick={() => this.handleGenreClick(this.state.genresList[i].id)} className='sidebar-row'>{
  //       this.state.genresList[i].name
  //     }</li>)
  //   }

  //   return sidebar
  // }

  // handleGenreClick(id) {
  //   console.log(id)
  //   var g_list = this.state.clickedGenres
  //   if (!g_list.includes(id)) {
  //     g_list.push(id)
  //   }
  //   else {
  //     g_list.pop(id)
  //   }
  //   this.setState({
  //     clickedGenres: g_list
  //   })
  //   console.log(this.state.clickedGenres)
  // }


  render() {
    return <div>
    </div>
    // return 
    // (
    //   <ul className='sidebar-style'>
    //     {this.state.genresList && this.createSidebar()}
    //   </ul>
    // );
  }
}

export default Sidebar;