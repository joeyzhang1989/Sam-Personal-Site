import React from 'react';
import logo from './logo.svg';


class Nav extends React.Component {

  constructor(){
    super()
    
  }


  render() {
    return (
      <div className="row nav">
        <div className="col">Home</div>
        <div className="col">Resume</div>
        <div className="col">Contact</div>
      </div>
    );
  }
}

export default Nav;
