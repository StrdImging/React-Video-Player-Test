import React from "react";
import ReactVideoTrimmer from "react-video-trimmer";
import "react-video-trimmer/dist/style.css";

const Trimmer = () => {
  const handleVideoEncode = React.useCallback(result => {
    console.log("Encoding Result:", result);
  });
  return (
    <div>
      <ReactVideoTrimmer
        onVideoEncode={handleVideoEncode}
        timeRange={{ start: 10, end: 100 }}
      />
    </div>
  );
};
export default Trimmer