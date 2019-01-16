import React, { Component } from "react";
import { MemoryRouter, Route, Link } from 'react-router-dom';

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
    return (<MemoryRouter>
    <div>
      <Route path="/" exact component={PageOne} />
      <Route path="/pagetwo" component={PageTwo} />
    </div>
  </MemoryRouter>)
  }
}

export default App;

