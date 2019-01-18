import React, { Component } from "react";
import { Router, Route } from 'react-router-dom'; // BrowserRouter Router to Router

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'; // We create our own history obj and not depend on BrowserRouter

class App extends Component {
  render() {
    return (
      <div className="ui container">      
        {/* If we have to use our own history object, then we cannot use BrowserRouter 
          component, as it has its own implementation of history object */}
        <Router history={history}>   
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;

