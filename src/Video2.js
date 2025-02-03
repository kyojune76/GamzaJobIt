import ReactPlayer from "react-player";
import React from "react";
import styled from "styled-components";

function YoutubeVideo2() {
  return (
    <VideoWrapper>
      <ReactPlayer
        url="https://www.youtube.com/embed/hs31WzyBIIg&t=1955s"
        width="100%"
        height="100%"
        controls
      />
    </VideoWrapper>
  );
}
export default YoutubeVideo2;
const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-style: none;
  border-radius: 20%;
  height: 38%;
`;
