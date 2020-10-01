import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/navbar'

import Home from './pages/home';
import Detail from './pages/detail';


class App extends Component {
  render(){
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/:name"><Detail/></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
