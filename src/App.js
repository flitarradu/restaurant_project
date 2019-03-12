import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './views/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Home />
        </div>
      </Router>
    );
  }
}

export default App;
