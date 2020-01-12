import React, { Component } from 'react';
import '../../styles/components/Sidebar.scss';
import $ from 'jquery';

class Sidebar extends Component {

  componentDidMount(){
    $('.sidebar-row').click(function(){
      if ($(this).hasClass('row-active'))
      $(this).removeClass('row-active');
      else
      $(this).addClass('row-active');
    });
  }

  createSidebar = () =>{
    const filters = ['action','music','mistery'];
    let sidebar = [];
    for(let i = 0; i<30*filters.length;i++){
    sidebar.push(<li class="sidebar-row">{filters[i%3].toUpperCase()}</li>)
    }
    return sidebar
  }
  render() {

    return (
      <ul className='sidebar-style'>
        {this.createSidebar()}
      </ul>
    );
  }
}

export default Sidebar;