import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../../styles/components/HeaderNavbar.scss';

class HeaderNavbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='toolbar-style'>
        <Tooltip title="home">
        <img className='logo-img-style' alt='logo' src={require('../../images/logo.png')}></img>
        </Tooltip>
      </div>
    );
  }
}

export default HeaderNavbar;