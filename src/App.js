import styled from "styled-components";
import YoutubeVideo from "./Video.js";
import YoutubeVideo2 from "./Video2.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Signup from "./SignUp.js";

function Home() {
  const navigate = useNavigate(); // React Router의 useNavigate 사용

  return (
    <MainBody>
      <MainHeader>
        <MainText>JobIt</MainText>

        <YoutubeVideo />
        <YoutubeVideo2 />
        <LoginSign>
          <Login>로그인</Login>
          <Sign onClick={() => navigate("/signup")}>회원가입</Sign>{" "}
          {/* 회원가입 클릭 시 이동 */}
        </LoginSign>
      </MainHeader>
    </MainBody>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
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
const Login = styled.div`
  color: rgb(193, 193, 233);
  padding-bottom: 20px;
`;
const Sign = styled.div`
  color: rgb(193, 193, 233);
  padding-bottom: 20px;
`;
const LoginSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const MainText = styled.div`
  font-size: 50px;
  color: #eaeaea;
`;
