import React from 'react'

import {Footer,Blog,Possibility, Features, WhatApp1,Header} from "./containers" 
import {CTA, Brand, Navbar} from "./components"
import "./App.css"

const App = () => {
  return (
    <div className='App'>

        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
    </div>
  )
}

export default App