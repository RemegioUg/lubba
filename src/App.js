import React from 'react'

import Home from './components/Home'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './components/pages/Contact'
import Activities from './components/pages/Activities'

function App() {

  return (
    <React.Fragment>
    
      <Router>
           <NavBar />
        
        
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path='/activities' component={Activities} />
       
        
       
      </Router>
       <Footer />
    </React.Fragment>
  )
}

export default App

