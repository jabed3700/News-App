import React, { Component } from 'react'
import { newsCategory } from './news'
import axios from 'axios'
import Header from './components/header'
import NewsList from './components/newsList'
import Pagination from './components/pagination'
import Loading from './components/loading'



// const fakeNews = [
//   {
//     title:'Title',
//     content: 'Content',
//     url: 'https:://linktonews.com',
//     urlToImage: 'https://linktoimage.com',
//     publishedAt: 'published date and time',
//     source:{
//       name:'CNN',
//     },
//   },
//   {
//     title:'Title',
//     content: 'Content',
//     url: 'https:://linktonews.com',
//     urlToImage: 'https://linktoimage.com',
//     publishedAt: 'published date and time',
//     source:{
//       name:'CNN',
//     },
//   },
// ]

// const URL = 'https://jsonplaceholder.typicode.com/users' 
// axios.get(URL)
//       .then(res=>{
//         console.log(res.data)
//       })

// const user = {
//   name: 'jabed',
//   email:'jabed@gmail.com',
//   username: 'jabedhosen'
// }

// axios.post(URL,user).then(res=>{
//   console.log(res);
// })

export class App extends Component {

  state= {
    news:[],
    category:newsCategory.technology,
  }

  changeCategory = (category) =>{
    console.log(category)
    this.setState({category})
  }

  componentDidMount(){
    const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=20`;
    axios.get(url)
      .then(response=>{
        this.setState({
          news:response.data.articles
        })
      })
      .catch(e=>{
        console.log(e)
      })
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.category !== this.state.category){
      const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=20`;
      axios.get(url)
        .then(response=>{
          this.setState({
            news:response.data.articles
          })
        })
        .catch(e=>{
          console.log(e)
        })
    }
  }

  render() {
    return (
      <div className='container'>
          <div className='row'>
            <div className='col-sm-6 offset-md-3'>
                <Header 
                    category = {this.state.category} 
                    changeCategory={this.changeCategory}
                />
                <div className='d-flex'>
                    <p className='text-black-50'>About {0} results found</p>
                    <p className='text-black-50 ms-auto'>
                      {1} page of {100}
                    </p>
                </div>
                <NewsList news={this.state.news}/>
                <Pagination />
                <Loading />
            </div>
          </div>
      </div>
    )
  }
}

export default App
