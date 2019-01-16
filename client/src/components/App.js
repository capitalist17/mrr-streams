import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return <div>Page one <Link to="/pageTwo"> go to pg2 </Link> </div>
}
const PageTwo = () => {
  return <div>Page two <button>Click Me!</button> 
    <Link to="/"> go to pg1 </Link>
  </div>
}

class App extends Component {
  render() {
    return (<BrowserRouter>
    <div>
      <Route path="/" exact component={PageOne} />
      <Route path="/pagetwo" component={PageTwo} />
    </div>
  </BrowserRouter>)
  }
}

export default App;

