import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
const App = () => {
  return (
    <>
    <NoteState>
    <Navbar/>
    <Alert message={"this is an amazing alert"}/>
    <div className='container my-3'>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      
      </Routes>
      </div>
      </NoteState>
    </>
  )
}

export default App
