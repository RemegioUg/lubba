import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Activities from './components/pages/Activities'
import Updates from './components/pages/Updates'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  return (
  <>
  <Home/>
    <Router>
      
      <Switch>
        <Route exact path="/activitis" component={Activities} />
        <Route exact path="/updates" component={Updates} />
        <Route exact path="/about us" component={About} />
        <Route exact path="/contact us" component={Contact} />
        
      </Switch>
    </Router>
    </>
  )
}

export default App

