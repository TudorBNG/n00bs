import React, { Component } from 'react';
import '../../styles/components/Sidebar.scss';

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      const filters = ['action','music','mistery'];
    return (
      <div className='sidebar-style'>
        <div>
        {filters[0]}
        </div>
        <div>
        {filters[1]}
        </div>
        <div>
        {filters[2]}
        </div>
        <div>
        {filters[0]}
        </div>
        <div>
        {filters[1]}
        </div>
        <div>
        {filters[2]}
        </div>
      </div>
    );
  }
}

export default Sidebar;