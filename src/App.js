import React from 'react'
import Header from './Header'
import Search from './Search'
import Results from './Results'

class App extends React.Component {
  state= {
    data: []
  }

  handleSubmitSearch = (e) => {
    e.preventDefault();
    // console.log(e.target.userName.value);
    fetch(`http://api.github.com/users/${e.target.userName.value}/repos`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        data: data
      }))
  }


  render(){
    return (
      <div>
        <Header />
        <main>
          <Search handleSubmitSearch={this.handleSubmitSearch}/>
          <Results data={this.state.data}/>
        </main>
      </div>
    )
  }
}

export default App