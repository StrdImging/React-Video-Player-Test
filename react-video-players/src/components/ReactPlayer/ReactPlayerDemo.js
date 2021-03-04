import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import GpsData from './dataFromGps.json'

const coordinateData = GpsData['coordinates'];
const startingTime = Object.keys(coordinateData)[0];
const allTimeValues = Object.keys(coordinateData);

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
      videoTime: undefined
    }
  }

  handleStateChange = (state) => {
    this.setState({
      player: state,
    });
  }
  currentTime = () => {
    console.log(this.player.getCurrentTime())
    return this.player.getCurrentTime();
  }

  handleProgress = (p) => {
    const { playedSeconds } = p;
    console.log(playedSeconds, "second")
    const previousPlayedSecond = this.state.previousProgress ? this.state.previousProgress.playedSeconds : 0;
    const difference = playedSeconds - previousPlayedSecond;
    const fps = (1 / difference);
    this.setState({
      videoTime: playedSeconds,
      previousProgress: p

    }, () => {
      console.log(this.state.videoTime, "v")
    })

  }

  render() {
    var givenTime = parseInt(this.state.videoTime) * (1000) + parseInt(startingTime);
    console.log(givenTime, "given")

    var lowTime = allTimeValues.filter((val) => parseInt(val) <= givenTime);
    var highTime = allTimeValues.filter((val) => parseInt(val) > givenTime);

    var filterTime = "";

    if (lowTime !== [] && highTime !== []) {
      var differenceLow = parseInt(givenTime) - parseInt(lowTime[lowTime.length - 1])
      var differenceHigh = parseInt(givenTime) - parseInt(highTime[0])

      filterTime = differenceLow < differenceHigh ? lowTime[lowTime.length - 1] : highTime[0];
    } else if (lowTime !== []) {
      filterTime = lowTime[lowTime.length - 1];
    } else {
      filterTime = highTime[0];
    }

    var filteredData = coordinateData[filterTime];

    console.log(filteredData, "filter")

    return (
      <div className="">
        <ReactPlayer
          ref={player => {
            this.player = player;

          }}
          controls={true}
          url={this.state.source}
          muted={true}
          playing={true}
          progressInterval={1}
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
            {filteredData ? filteredData['lat'] : "not found"}
          </p>
          <p>
            {filteredData ? filteredData['long'] : "not found"}
          </p>
        </div>


      </div>
    )
  }
}
export default PlayerExample 