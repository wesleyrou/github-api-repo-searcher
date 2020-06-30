import React from  'react'

const Search = (props) => {
    return (
        <div className='search-container'>
            <form onSubmit={e => props.handleSubmitSearch(e)}>
                <legend hidden>Github Repo Search</legend>
                <fieldset>
                    <label htmlFor='userName'>Username:</label>
                    <input name='userName' id='userName'></input>
                    <button type='submit'>Search</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Search