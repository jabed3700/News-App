import React, { Component } from 'react'
import { newsCategory } from '../news'
export class Header extends Component {
    state = {
        searchTerm: '',
    }
    handleChange = e =>{
        // TODO: implement later
        this.setState({searchTerm: e.target.value})
    }
    handleKeyPress = e =>{
        // TODO: implement later
    }
    render() {
        const {category,changeCategory} = this.props
        
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{fontWeight: '300'}}>Block Buster Headlines</h1>
                <input
                    type="search"
                    className='form-control'
                    placeholder='Type Anything & Press Enter To Search'
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className="my-4">
                    {newsCategory && Object.keys(newsCategory).map(item=>{
                        if(category === newsCategory[item]){
                            return(
                                <button className='btn btn-sm btn-warning me-2 mb-2' onClick={()=>changeCategory(newsCategory[item])}>
                                    {`#${newsCategory[item]}`}
                                </button>
                            )
                        }
                        return(
                            <button className='btn btn-sm btn-light me-2 mb-2' onClick={()=>changeCategory(newsCategory[item])}>
                                {`#${newsCategory[item]}`}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Header
