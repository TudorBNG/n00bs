import React, { Component } from 'react';
import '../../styles/components/Sidebar.scss';
import IGenre from '../../models/Genre.ts';
import $ from 'jquery';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.getGenres = this.getGenres.bind(this);
  }

  state = {
    genresList: [IGenre]
  };

  componentDidMount() {
    this.getGenres()
      .then((res) => {
        this.setState({
          genresList: res
        })
        console.log(res)
      })
      .catch(err => console.log(err))

    $('.sidebar-row').click(function () {
      if ($(this).hasClass('row-active'))
        $(this).removeClass('row-active');
      else
        $(this).addClass('row-active');
    });
  }

  getGenres() {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/backend/noobs-api/genre/all')
        .then(res => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch(err => reject(err));
    })
  }

  createSidebar = () => {
    //const filters = this.state.genresList;
    let sidebar = [];

    for (let i = 0; i < this.state.genresList.length; i++) {
      sidebar.push(<li class="sidebar-row">{this.state.genresList[i].name}</li>)
    }
    return sidebar
  }
  render() {

    return (
      <ul className='sidebar-style'>
        {this.state.genresList && this.createSidebar()}
      </ul>
    );
  }
}

export default Sidebar;