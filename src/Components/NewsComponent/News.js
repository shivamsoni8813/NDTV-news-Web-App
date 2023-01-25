import axios from "axios";
import React, { useEffect, useState } from "react";
import './News.css'
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import NewsCard from "./NewsCard";

function News(props) {
  let [news, setnews] = useState([]);
  let [total, settotal] = useState(0);
  let [loader, setloader] = useState(false);   // making loading false for showing loader
  let [page, setpage] = useState(1);            // adding pagination for infinite scroll 
  //   console.log(total);
  //   console.log(news);

  // fetching data from news api

  let fetchNews = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f91865d2e5674790be91d8dcd92e1a95&page=1&pageSize=${props.pageSize}`;
      setloader(true);
      let { data } = await axios.get(url);
      settotal(data.totalResults);
      setnews(data.articles);
      setloader(false);
    } catch (error) {
      console.log(error);
    }
  };

  // for infinite scrollbar

  let fetchData = async () => {
    setpage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category ? props.category : "business"}&apiKey=f91865d2e5674790be91d8dcd92e1a95&page=${page}&pageSize=${props.pageSize}`;
    setloader(true);
    let { data } = await axios.get(url);
    console.log(data)
    setnews(news.concat(data.articles))
    settotal(data.totalResults)
    setloader(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (<>
      <h1 className="text-center">Welcome to ndtv {props.category} news</h1>
    <div className="news-container">
   
    <InfiniteScroll
          dataLength={news.length}
          next={fetchData}
          hasMore={news.length !== total}
          loader={<h4><Loader/></h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          style={{overflow:"hidden"}}
          > 

        <div className="container my-3">
          <div className="row">
            {news &&
              news.map((e, i) => {
                return (
                  <div className="col-md-4 my-3" key={i}>
                    <NewsCard
                      image={e.urlToImage}
                      title={e.title}
                      description={e.description}
                      url={e.url}
                      src={e.source.name}
                      publish={e.publishedAt}
                      author={e.author}
                      />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
                </>
  );
}

export default News;
