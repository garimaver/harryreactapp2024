import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

// 6a4432b566b04f6bb1e2b65c5b849960
export default class App extends Component {
  c = "john"
  render() {
    return (
      <div>
      <Navbar/>
      <News/>
      </div>
    )
  }
}
