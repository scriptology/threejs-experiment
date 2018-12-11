import React from 'react';
import { hot } from 'react-hot-loader';
import Project from './components/project/';

class App extends React.PureComponent {
  render() {
    return (
      <div className="3d-widget">
        <Project />
      </div>
    );
  }
}

export default hot(module)(App);
