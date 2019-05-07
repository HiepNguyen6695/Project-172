import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>
            <nav>
                <a className="home-link-logo" href="/"><div className="logo">EMOTIONLESS<img src = "emotionless.png" height = "50" width ="50"></img></div></a>
                
            </nav>
        </header>
 
    );
  }
}

export default Header;
