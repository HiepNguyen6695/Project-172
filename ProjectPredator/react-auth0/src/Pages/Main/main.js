import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="box-wrapper">
          <div className="logo1">Log In
            <div className="line-left"></div>
            <div className="line-right"></div>
          </div>
          
            <button className="Single-Sign-On-Button" onClick={this.props.auth.signin}>Single Sign On</button>
          
          <a href="https://project-nobody.auth0.com/samlp/jgWaX0A2TgcURKdtVnAQyKu6N6KhSIcw"><input className="Slack-SSO" type="button" value="Slack SSO"></input></a>
        </div>
      </div>
    );
  }
}

export default Main;