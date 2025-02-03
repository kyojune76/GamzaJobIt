import ReactPlayer from "react-player";
import React from "react";
import styled from "styled-components";

function YoutubeVideo() {
  return (
    <VideoWrapper>
      <ReactPlayer
        url="https://www.youtube.com/embed/5FfGhMskI_w&t=485s"
        width="100%"
        height="100%"
        controls
      />
    </VideoWrapper>
  );
}
export default YoutubeVideo;
const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 38%;
`;
