import React from  'react'
import Result from './Result'

const Results = (props) => {
    console.log(props.data)
    const results = props.data.map((repo,index) => <Result key={index} repo={repo}/>)


    return (
        <div className='results-container'>
            {results}
        </div>
    )
}

export default Results