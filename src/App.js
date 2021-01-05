import React from 'react'

import Home from './components/Home'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <div>
     
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
       
        </Switch>
        
        <Footer />
      </Router>
      
    </div>
  )
}

export default App

