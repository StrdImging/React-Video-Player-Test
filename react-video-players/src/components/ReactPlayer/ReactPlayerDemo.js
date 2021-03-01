import React, { Component } from 'react';
import ReactPlayer from 'react-player'
class PlayerExample extends Component {
  // DOCS: https://www.npmjs.com/package/react-player
 render() {
    return (
      <div className="">
        <ReactPlayer
        controls={true}
          url="http://media.w3.org/2010/05/sintel/trailer.mp4"
          muted={false}
          playing={true}
        width="640px"
        height="360px"
        />
        
      </div>
 )
  }
}
export default PlayerExample 