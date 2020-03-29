import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import Home from './home';
import Topics from './topics';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>
        </div>
        <hr/>
        <Route exact path = '/' component = {Home}></Route>
        <Route exact path = '/topics' component = {Topics}></Route>
        <Route path = '/topics/:test' component = {Topics}></Route>

      </Router>

    )
  }
}
export default App;