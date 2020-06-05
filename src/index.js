import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '@babel/polyfill'

import Front from './components/Front'
import Dash from './components/Dash'
import Tenet from './components/Tenet'

import './styles.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/dash' component={Dash} />
        <Route path='/tenet' component={Tenet} />
        <Route exact path='/' component={Front} />
      </Switch>
    </Router>
  )
}

render(<App />, document.getElementById('container'))
