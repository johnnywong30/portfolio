import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Resume from './components/resume/Resume';
import './App.css';

class App extends Component {
  state = {

  };

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Resume />
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
