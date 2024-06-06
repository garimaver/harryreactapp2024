import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Route, Routes } from 'react-router-dom'

export default class App extends Component {

  render() {
    const country = "us"; // Define the country code
    const categories = ["general", "business", "entertainment", "science", "sports", "technology", "health"];

    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<News pageSize={5} country={country} category={categories[0]}/>} />
          <Route path='/business' element={<News pageSize={5} country={country} category={categories[1]}/>} />
          <Route path='/entertainment' element={<News pageSize={5} country={country} category={categories[2]}/>} />
          <Route path='/science' element={<News pageSize={5} country={country} category={categories[3]}/>} />
          <Route path='/sports' element={<News pageSize={5} country={country} category={categories[4]}/>} />
          <Route path='/technology' element={<News pageSize={5} country={country} category={categories[5]}/>} />
          <Route path='/health' element={<News pageSize={5} country={country} category={categories[6]}/>} />
        </Routes>
      </div>
    )
  }
}
