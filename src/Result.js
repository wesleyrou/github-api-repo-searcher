import React from 'react'

const Result = (props) => {
    return(
        <div className='result-container'>
            {props.repo.name}
            <a href={props.repo.url}>Link</a>            
        </div>
    )
}

export default Result