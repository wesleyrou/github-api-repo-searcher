import React from 'react'

const Result = (props) => {
    console.log(props.repo)
    return(
        <div classNAme='result-container'>
            {props.repo.name}
            <a href={props.repo.url}>Link</a>
            
            
        </div>
    )
}

export default Result