import React from "react";
import styled from "styled-components";
const SignUpLocal = ({ text }) => {
  return (
    <LSignup>
      <Id placeholder="아이디" />
      <Passwd placeholder="비밀번호" />
    </LSignup>
  );
};

export default SignUpLocal;
const LSignup = styled.div`
  width: 50vh;
  height: 80vh;
  border-radius: 20%;
  border-style: none;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
`;
const Id = styled.textarea`
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 8px;
`;
const Passwd = styled.textarea`
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 8px;
`;
