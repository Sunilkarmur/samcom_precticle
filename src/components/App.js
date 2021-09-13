import React, { Component,createContext } from 'react'
import {Route,Switch,Redirect,BrowserRouter as Router} from 'react-router-dom';
// import logo from '../assets/images/logo.svg'
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactView from "../screen/counter/contact-view";



class App extends Component {

  state = {

  }
  

  render() {

    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <ContactView/>}
                    />
            </Switch>
        </Router>

    )
  }
}

export default App
