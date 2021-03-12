import React, { Component } from 'react'
import ReactPlayerDemo from './components/ReactPlayer/ReactPlayerDemo'
import Trimmer from './components/ReactPlayer/Trimmer'
 class App extends Component {
  render() {
    return (
      <div className="App"> 
        <ReactPlayerDemo/>
        <Trimmer/>
      </div>
    )
  }
}

export default App