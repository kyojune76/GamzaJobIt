import ReactPlayer from "react-player";
import React from "react";
import styled from "styled-components";

function YoutubeVideo() {
  return (
    <VideoWrapper>
      <ReactPlayer
        url="https://www.youtube.com/embed/wcM8L2sWkdg&t=37s"
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
