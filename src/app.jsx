import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.PureComponent {
  render() {
    return (
      <div className="3d-widget">
        <div><span>test</span></div>
          <canvas
            id="3d-widget-canvas"
          />
      </div>
    );
  }
}

export default hot(module)(App);
