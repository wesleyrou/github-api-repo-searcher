import React from 'react'
import Header from './Header'
import Search from './Search'
import Results from './Results'

class App extends React.Component {
  state= {
    data: [],
    user: '',
    loading: false,
    searched: false,
    hasSearchValue: false
  }

  handleSubmitSearch = (e) => {
    e.preventDefault();
    const user=e.target.userName.value
    this.setState({loading:true})
    fetch(`http://api.github.com/users/${user}/repos`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        data: data,
        user: user,
        loading:false,
        searched:true
      }))
  }

  handleSearchValueChange= (e) => {
    if(e.target.value.length>0){
      this.setState({hasSearchValue:true})
    } else{
      this.setState({hasSearchValue:false})
    }
  }

  render(){
    return (
      <div>
        <Header />
        <main>
          <Search loading={this.state.loading} hasSearchValue={this.state.hasSearchValue} handleSearchValueChange={this.handleSearchValueChange} handleSubmitSearch={this.handleSubmitSearch}/>
          <Results searched={this.state.searched} loading={this.state.loading} user={this.state.user} data={this.state.data}/>
        </main>
      </div>
    )
  }
}

export default App