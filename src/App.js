import React, { Component } from 'react'
import News, { newsCategory } from './news'
import Header from './components/header'
import NewsList from './components/newsList'
import Pagination from './components/pagination'
import Loading from './components/loading'

const news = new News(newsCategory.technology)

export class App extends Component {
  state= {
    data:{},
    isLoading:true
  }

  componentDidMount(){
    news.getNews()
        .then(data=>{
          this.setState({data,isLoading:false})
        })
        .catch(e =>{
          console.log(e)
          alert('Something Went Wrong')
          this.setState({isLoading:false})
        })
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
                {
                  this.state.isLoading ?(
                    <Loading />
                  ):(
                    <NewsList news={this.state.data.article}/>
                  )
                }
                <Pagination />
            </div>
          </div>
      </div>
    )
  }
}

export default App
