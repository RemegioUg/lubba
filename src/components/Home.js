import React, { Component } from 'react'

import Footer from './NavBar'
import NavBar from './Footer'
import Body from './Body'


 class Home extends React.Component {
  render() {
    return (
        <>
        <div className="page">
          <Footer />
       <Body />
        <NavBar />
        </div>
        
       
        </>
    )
  }
}

export default Home
