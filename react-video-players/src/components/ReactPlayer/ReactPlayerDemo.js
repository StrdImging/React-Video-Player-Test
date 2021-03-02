import React, { Component } from 'react';
import ReactPlayer from 'react-player'

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};
class PlayerExample extends Component {
   constructor(props) {
    super(props)
  
    this.state = {
      source: sources.bunnyMovie,
    }
  }

  handleStateChange = (state) => {
    this.setState({
      player: state
    });
  }
  currentTime =() =>  {
   console.log(this.player.getCurrentTime()) 
  }
  
 render() {
    return (
      <div className="">
        <ReactPlayer
         ref={player => {
          this.player = player;
        }}
        controls={true}
          url={this.state.source}
          muted={false}
          playing={true}
        width="640px"
        height="360px"
        />
        <div className="py-3">
          <button onClick={this.currentTime}>
          get time
          </button>
          </div>

        
      </div>
 )
  }
}
export default PlayerExample 