import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageProjectsList from './components/page-projects-list/';
import PageProject from './components/page-project/';
import PageNoMatch from './components/page-no-match/';

class App extends React.PureComponent {
  render() {
    return (
      <div className="3d-widget">
        <Router>
          <Switch>
            <Route exact path="/" component={PageProjectsList} />
              <Route exact path="/projects/:name" component={PageProject} />
                <Route component={PageNoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
