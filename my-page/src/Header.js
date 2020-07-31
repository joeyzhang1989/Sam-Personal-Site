import React from 'react';
import Nav from './Nav'
import Logo from './pics/Logo.jpg'


class Header extends React.Component {

  constructor() {
    super()

  }


  render() {
    return (
      <div className="Header">
        <div className="row">

          <div className="col-4">
            <img src={Logo} alt='Logo' />
          </div>
          <div className="col-8">
            <Nav />
          </div>
        </div>
        <div>
          <hr className="HRline" />
        </div>
      </div>
    );
  }
}

export default Header;
