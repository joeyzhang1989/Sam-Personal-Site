import React from 'react';
import Nav from './Nav'
import Logo from './pics/Logo.jpg'




class Header extends React.Component {

  constructor() {
    super()

  }


  render() {
    return (
      <div className="Header mx-auto container">
        <div className="container row">
          <div className="logopic col-4">
            <img src={Logo} className="img-fluid mx-auto d-block" alt='Logo'/>
          </div>

          <div className="navlist col-8">
            <Nav />
          </div>
        </div>
        
      </div>
    );
  }
}

export default Header;
