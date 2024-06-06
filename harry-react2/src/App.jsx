import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Route, Routes } from 'react-router-dom'

export default class App extends Component {

  render() {
    const pageSize = 5;
    const country = "in"; // Define the country code
    const categories = ["general", "business", "entertainment", "science", "sports", "technology", "health"];

    return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact   path='/' element={<News pageSize={5} country={country} category={categories[0]}/>} />
          <Route exact key="business" path='/business' element={<News pageSize={5} country={country} category={categories[1]}/>} />
          <Route exact key="entertainment" path='/entertainment' element={<News pageSize={5} country={country} category={categories[2]}/>} />
          <Route exact key="science" path='/science' element={<News pageSize={5} country={country} category={categories[3]}/>} />
          <Route exact key="sports" path='/sports' element={<News pageSize={5} country={country} category={categories[4]}/>} />
          <Route exact key="technology" path='/technology' element={<News pageSize={5} country={country} category={categories[5]}/>} />
          <Route exact key="health" path='/health' element={<News pageSize={5} country={country} category={categories[6]}/>} />
        </Routes>
      </div>
    )
  }
}
