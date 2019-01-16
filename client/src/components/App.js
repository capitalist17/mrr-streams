import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>Page one</div>
}
const PageTwo = () => {
  return <div>Page two <button>Click Me!</button> </div>
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

