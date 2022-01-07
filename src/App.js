import React, { Component } from 'react'
import { newsCategory } from './news'
import axios from 'axios'
import Header from './components/header'
import NewsList from './components/newsList'
import Pagination from './components/pagination'
import Loading from './components/loading'



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

const URL = 'https://jsonplaceholder.typicode.com/users' 
axios.get(URL)
      .then(res=>{
        console.log(res.data)
      })

const user = {
  name: 'jabed',
  email:'jabed@gmail.com',
  username: 'jabedhosen'
}

axios.post(URL,user).then(res=>{
  console.log(res);
})

export class App extends Component {
  render() {
    return (
      <div className='container'>
          <div className='row'>
            <div className='col-sm-6 offset-md-3'>
                <Header category = {newsCategory.technology}/>
                <div className='d-flex'>
                    <p className='text-black-50'>About {0} results found</p>
                    <p className='text-black-50 ms-auto'>
                      {1} page of {100}
                    </p>
                </div>
                <NewsList news={fakeNews}/>
                <Pagination />
                <Loading />
            </div>
          </div>
      </div>
    )
  }
}

export default App
