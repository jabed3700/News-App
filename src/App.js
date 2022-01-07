import React, { Component } from 'react'
import { newsCategory } from './news'
import Header from './components/header'
import NewsList from './components/newsList'

const fakeNews = [
  {
    title:'Title',
    content: 'Content',
    url: 'https:://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'published date and time',
    source:{
      name:'CNN',
    },
  },
  {
    title:'Title',
    content: 'Content',
    url: 'https:://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'published date and time',
    source:{
      name:'CNN',
    },
  },
]
export class App extends Component {
  render() {
    return (
      <div className='container'>
          <div className='row'>
            <div className='col-sm-6 offset-md-3'>
                <Header category = {newsCategory.technology}/>
                <NewsList news={fakeNews}/>
            </div>
          </div>
      </div>
    )
  }
}

export default App
