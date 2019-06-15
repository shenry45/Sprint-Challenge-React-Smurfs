import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import SmurfDelete from './components/SmurfDelete';
import SmurfEdit from './components/SmurfEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }
  
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            path="/smurf-form"
            component={SmurfForm}
          />
          <Route
            path="/smurf-edit"
            render={() => <SmurfEdit smurfs={this.state.smurfs}/>}
          />
          <Route
            path="/"
            exact
            render={
              () => <Smurfs smurfs={this.state.smurfs} exact />
            }
          />
          <SmurfDelete />
        </div>
      </Router>
    );
  }
}

export default App;
