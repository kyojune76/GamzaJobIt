import styled from "styled-components";
import YoutubeVideo from "./Video.js";
import YoutubeVideo2 from "./Video2.js";
function App() {
  return (
    <MainBody>
      <MainHeader>
        <MainText>JobIt</MainText>

        <YoutubeVideo />
        <YoutubeVideo2 />
        <LoginSign>로그인 회원가입</LoginSign>
      </MainHeader>
    </MainBody>
  );
}

export default App;
const MainHeader = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  border-style: none;
  border-radius: 20%;
  font-size: 20px;
  color: mediumaquamarine;
  background-color: rgb(0, 0, 0);
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const MainBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const LoginSign = styled.div`
  color: rgb(193, 193, 233);
  padding-bottom: 20px;
`;
const MainText = styled.div`
  font-size: 50px;
  color: #eaeaea;
`;
