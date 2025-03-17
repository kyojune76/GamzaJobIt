import styled from "styled-components";

function App(text) {
  return (
    <Mainframe>
      <Name placeholder="이름을 입력하세요" />
      <NickName placeholder="닉네임을 입력하세요" />
      <Email placeholder="이메일을 입력하세요" />
      <Roleselect placeholder="역할을 입력하세요">
        <option>졸업예정자</option>
        <option>직장인</option>
        <option>비전공자</option>
        <option>기타</option>
      </Roleselect>
    </Mainframe>
  );
}

export default App;
const Mainframe = styled.div`
  margin-top: 250px;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  align-content: space-evenly;
  align-items: center;
  justify-content: space-evenly;
`;
const Name = styled.textarea`
  width: 100vh;
  border-style: solid;
  border-radius: 8px;
  resize: none;
`;
const NickName = styled.textarea`
  width: 100vh;
  border-style: solid;
  border-radius: 8px;
  resize: none;
`;
const Email = styled.textarea`
  width: 100vh;
  border-style: solid;
  border-radius: 8px;
  resize: none;
`;
const Role = styled.textarea`
  width: 100vh;
  border-style: solid;
  border-radius: 8px;
  resize: none;
`;
const Roleselect = styled.select`
  width: 100vh;
  resize: none;
  border-style: solid;
  border-radius: 8px;
  cursor: pointer;
`;
