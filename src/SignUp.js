import React from "react";
import NaverLogin from "react-naver-login";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log("네이버 로그인 성공:", response);
    // 백엔드에 토큰 전달 가능
    navigate("/dashboard"); // 로그인 후 이동할 페이지
  };

  const handleFailure = (error) => {
    console.log("네이버 로그인 실패:", error);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>회원가입</h1>
      <NaverLogin
        clientId="0tsRNue91Jpr8WiCObrH"
        callbackUrl="http://localhost:3000/auth/naver/callback"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
      >
        {" "}
        <button>네이버 로그인</button>
      </NaverLogin>
    </div>
  );
}

export default Signup;
