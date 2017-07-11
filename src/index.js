import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { About } from './components/pages/About'
import { Home } from './components/pages/Home'
import { store } from './store'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  </Provider>,
  mountNode
)
