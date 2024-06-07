import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
