import React from 'react';

import headerbanner from './pics/headerbanner3.jpg'
import Header from './Header.js'
import IntroSec from './IntroSec'

function Home() {
  return (
    <div className="Home mx-auto container mt-0">


      
        <img className="mainpic img-fluid mx-auto d-block" src={headerbanner} />
      

      
        <IntroSec />
      

    </div>
  );
}

export default Home;
