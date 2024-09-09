import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { News } from './Component/News';
import './App.css';

function App() {

  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);

  // const apiKey = 'cd656c5d185147829a87bf2ddab7a7bd';
  
  const apiKey = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    // Making a GET request when the component mounts
    axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-09-08&to=2024-09-08&sortBy=popularity&apiKey=${apiKey}`)
      .then(response => {
        setNews(response.data.articles);
        setFilteredNews(response.data.articles);
        console.log(response.data.articles)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Update filteredData when searchQuery changes
    const filtered = news.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [searchQuery, news]);


  return (
    <section className='my-4'>
          <Container>
            <Row>
            <h1>News App</h1>
            <input
              type="text"
              className='mb-4'
              placeholder="Search by title"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {filteredNews.map(item => (
                <News
                  title = {item.title}
                  description = {item.description}
                  image = {item.urlToImage}
                  url = {item.url}
                  date = {item.publishedAt}
                  authorName = {item.author}
                />
            ))}
              </Row>
            </Container>
    </section>
  );
}

export default App;
