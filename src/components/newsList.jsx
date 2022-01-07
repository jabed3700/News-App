import React from 'react'

function getDateString(dateTimeStr){
    return new Date(dateTimeStr).toDateString()
}

const NewsItem = ({item})=>(
    <div className="card mb-4">
        {item.urlToImage && (
            <img 
                className='card-image-top'
                src={item.urlToImage}
                alt={item.title}
            />
        )}
        <div className="card-body">
            <a 
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                style={{color: '#424242'}}

            >
                <h5 className='card-title'>
                    {item.title}
                </h5>
            </a>
            <a 
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                style={{color: '#424242'}}

            >
                <h5 className='card-title'>
                    {item.content}
                </h5>
            </a>
            <div className="mt-2 d-flex align-items-center">
                <div className="">
                <small>
                    <strong>
                        published at {getDateString(item.publishedAt) }
                    </strong>
                </small>
                </div>
                <div className='ms-auto'
                    style={{
                        padding:'.25rem .5rem',
                        background: '#ededed',
                        color: '#424242',
                        borderRadius:'0.25rem',
                        display: 'inline-block'
                    }}
                >
                    <small>
                        {item.source.name}
                    </small>
                </div>
            </div>
        </div>
    </div>
)
function NewsList({news}) {
    return (
        <div>
            {news && news.length === 0 && <h4>There is No News</h4>}
            {news && news.map(item => <NewsItem key = {item.title} item = {item}/>)}
        </div>
    )
}

export default NewsList
