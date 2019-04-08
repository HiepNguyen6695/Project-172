/* eslint no-restricted-globals: 0 */
import React, { Component } from 'react';

import Main from "./Pages/Main/main";
import Secret from "./Pages/Main/secret";
import Error from "./Pages/Main/error";

import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Loading from "./Components/Loading/loading"; 


import "./Assets/Css/main.css";

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    let mainComponents = "";
    let loading = "";

    switch(this.props.location){
      case "":
        mainComponents = <Main {...this.props}/>;
        break;
      case "secret":
        mainComponents = !this.props.auth.isAuthenticated() ? <Secret {...this.props}/> : <Error/>;
        break;
      default:
        mainComponents = <Main {...this.props}/>;
        break;
    }
    
    return (
        <div className="App">
          <Header/>
          <Loading/>
          {mainComponents}
          <Footer/>
        </div>

    );
  }
}

export default App;
