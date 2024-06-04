import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("hello i m construction");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6a4432b566b04f6bb1e2b65c5b849960";
    let data = await fetch(url);
    let paresData = await data.json();
    console.log(paresData);
    this.setState({ articles: paresData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark">Previous</button>
        <button  type="button" className="btn btn-dark ">Next</button>
        </div>
      </div>
    );
  }
}

export default News;
