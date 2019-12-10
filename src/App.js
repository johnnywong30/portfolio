import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Resume from './components/resume/Resume';
import ResumeData from './data/ResumeData.js'

import './App.css';



class App extends Component {
  state = {

  };

  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>

              </React.Fragment>
              )}
            />
            <Route exact path="/resume" render={props => (
              <React.Fragment>
                <Resume data={ ResumeData() }/>
              </React.Fragment>
              )}
            />
          </div>

        </div>
      </Router>

    );
  }
}

export default App;
