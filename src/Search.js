import React from  'react'

const Search = (props) => {
    return (
        <div className='search-container'>
            <form onSubmit={e => props.handleSubmitSearch(e)}>
                <legend hidden>Github Repo Search</legend>
                <fieldset>
                    <label htmlFor='userName'>Username:</label>
                    <input onChange={e => props.handleSearchValueChange(e)} name='userName' id='userName'></input>
                    <button disabled={!props.hasSearchValue || props.loading} type='submit'>Search</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Search