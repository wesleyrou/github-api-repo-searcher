import React from  'react'
import Result from './Result'

const Results = (props) => {
    let results
    props.loading ? results= <div>Searching...</div> : results =props.data.map((repo,index) => <Result key={index} repo={repo}/>)
    return (
        <div className='results-container'>            
            {(props.searched) && (props.loading ? <div>Searching...</div> : <><h2>{props.user}'s Repos</h2> {results}</>)}
            
            
        </div>
    )
}

export default Results