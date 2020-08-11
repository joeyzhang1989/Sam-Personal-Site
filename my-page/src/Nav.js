import React from 'react';

import { Link } from 'react-router-dom';



class Nav extends React.Component {

  constructor(){
    super()
    
  }


  render() {
    return (
      <div className="row nav">
        <Link to="/">
        <div className="col">Home</div>
        </Link>
        {/* <div className="col">Resume</div> */}
        <Link to="/contact">
        <div className="col">Contact</div>
        </Link>
      </div>
    );
  }
}

export default Nav;
