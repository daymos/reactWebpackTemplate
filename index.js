import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TopBar from './TopBar.js'

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
      <TopBar />
      <h1>hello</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
