import React from "react";
import NaverLogin from "react-naver-login";
import { useNavigate } from "react-router-dom";
import SignUpLocal from "./SignUpLocal";
import styled from "styled-components";
function Signup() {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log("네이버 로그인 성공:", response);
    // 백엔드에 토큰 전달 가능
    navigate("/"); // 로그인 후 이동할 페이지
  };

  const handleFailure = (error) => {
    console.log("네이버 로그인 실패:", error);
  };

  return (
    <MainFrame>
      <SignupName>JobIt</SignupName>
      <SignUpLocal />
      <NaverLogin
        clientId="0tsRNue91Jpr8WiCObrH"
        callbackUrl="http://localhost:3000/auth/naver/callback"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        render={(props) => (
          <Button onClick={props.onClick}>네이버 로그인</Button>
        )}
      >
        {" "}
        <button>네이버 로그인</button>
      </NaverLogin>
      <Identification onClick={() => navigate("/lsp")}>
        JobIt 회원가입
      </Identification>
    </MainFrame>
  );
}

export default Signup;

const MainFrame = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SignupName = styled.div`
  font-size: 50px;
  color: midnightblue;
  font-weight: bold;
`;
const Button = styled.div`
  background-color: #03c75a; // 네이버 그린
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: "none";
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Identification = styled.div`
  background-color: "gray";
  color: "white";
`;
