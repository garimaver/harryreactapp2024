import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <h1>news items</h1>
        <NewsItem/>
      </div>
    )
  }
}

export default News
