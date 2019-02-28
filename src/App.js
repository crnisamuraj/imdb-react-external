import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import Home from './containers/Home';
import './App.css';
import AppLayout from './component/AppLayout';
import store from './store/Store';
import './styles/css/bootstrap.min.css';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <AppLayout history={history} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;