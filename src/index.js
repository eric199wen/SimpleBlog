import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter interact with History library
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends React.Component {
  render() { return <div>Hello!</div> }
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye!</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {/* if the user go to path, then render component */}
        {/* react route use loose match, so we use Switch component */}
        {/* match the first route match the url */}
        <Switch>
          {/* react-router will pass in a bunch of props to help us
          for navigation */}
          <Route path="/posts/new" component={PostsNew} />
          {/* :id is a wildcard, route will put whatever in property
          'id' after / */}
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
