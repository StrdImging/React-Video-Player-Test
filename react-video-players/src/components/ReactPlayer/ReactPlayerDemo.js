import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import GpsData from './dataFromGps.json'

const coordinateData = GpsData['coordinates'];
const startingTime = Object.keys(coordinateData)[0];
const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
  youtube: 'https://www.youtube.com/watch?v=AS8F3np9laQ&list=RDAS8F3np9laQ&start_radio=1',
  localVideo: 'videoplayback.mp4'
};


class PlayerExample extends Component {
  constructor(props) {
    super(props)


    this.state = {
      source: sources.localVideo,
      previousProgress: null,
    }
  }

  handleStateChange = (state) => {
    this.setState({
      player: state
    });
  }
  currentTime = () => {
    console.log(this.player.getCurrentTime())
    return this.player.getCurrentTime();
  }

  handleProgress = (p) => {
    const { playedSeconds } = p;
    const previousPlayedSecond = this.state.previousProgress ? this.state.previousProgress.playedSeconds : 0;
    const difference = playedSeconds - previousPlayedSecond;
    const fps = (1 / difference);
    // console.log(fps)
    this.setState({
      previousProgress: p,
    })

  }

  render() {

    var videoTime = 50;      ///Get curret time from video in here and will relect the gps
    var videoTimeInMiliSeconds = Math.round(videoTime) * (10 ** 3);
    var givenTime = videoTimeInMiliSeconds + parseInt(startingTime);

    var filteredData = coordinateData[givenTime];

    // console.log(givenTime);

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
          progressInterval={42}
          width="640px"
          height="360px"
          onProgress={this.handleProgress}
        />
        <div className="py-3">
          <button onClick={this.currentTime}>
            get time
          </button>
        </div>
        <div>
          <p>
            {filteredData['lat']}
          </p>
          <p>
            {filteredData['long']}
          </p>
        </div>


      </div>
    )
  }
}
export default PlayerExample 