import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    const pageSize = 5;
    const country = "in"; // Define the country code
    const categories = ["general", "business", "entertainment", "science", "sports", "technology", "health"];

    return (
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} pageSize={5} country={country} category={categories[0]} />} />
          <Route exact key="business" path='/business' element={<News setProgress={this.setProgress} pageSize={5} country={country} category={categories[1]} />} />
          <Route exact key="entertainment" path='/entertainment' element={<News setProgress={this.setProgress} pageSize={5} country={country} category={categories[2]} />} />
          <Route exact key="science" path='/science' element={<News setProgress={this.setProgress} pageSize={5} country={country} category={categories[3]} />} />
          <Route exact key="sports" path='/sports' element={<News setProgress={this.setProgress} pageSize={5} country={country} category={categories[4]} />} />
          <Route exact key="technology" path='/technology' element={<News setProgress={this.setProgress} pageSize={5} country={country} category={categories[5]} />} />
          <Route exact key="health" path='/health' element={<News setProgress={this.setProgress} pageSize={5} country={country} category={categories[6]} />} />
        </Routes>
      </div>
    );
  }
}
