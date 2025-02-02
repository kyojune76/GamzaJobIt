import styled from "styled-components";
function App() {
  return (
    <MainBody>
      <MainHeader>
        <MainText>JobIt</MainText>
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
  border-style: ridge;
  border-radius: 20%;
  font-size: 20px;
  color: mediumaquamarine;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  flex-direction: column;
`;
const MainBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const LoginSign = styled.div`
  color: black;
`;
const MainText = styled.div`
  font-size: 50px;
  color: royalblue;
`;
