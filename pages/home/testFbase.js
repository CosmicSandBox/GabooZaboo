import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  addDocument,
  getCollectionAll,
  deleteDocument,
} from "../../firebase/fbase";

function TestFbase() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [mbti, setMbti] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const mbtiChange = (e) => {
    setMbti(e.target.value);
  };

  const getUsers = async () => {
    // if (!id) return;
    const data = await getCollectionAll("user");
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const resetForm = () => {
    setName("");
    setMbti("");
  };
  const handleSubmit = (e) => {
    // 돔에서 일어나는 이벤트의 기본적인 속성 막음 =>form 사용할 때 써야됨
    e.preventDefault();
    resetForm();
    addDocument("user", {
      name,
      mbti,
    });
    getUsers();
  };

  const Delete = (id) => {
    deleteDocument("user", id);
    getUsers();
  };

  return (
    <Wrapper>
      <h2>firebase Test</h2>
      {users.map((user) => (
        <div>
          <p>이름:{user.name}</p>
          <p>Mbti:{user.mbti}</p>
          <button onClick={() => Delete(user.id)}>삭제</button>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={nameChange}
        />
        <input
          type="text"
          placeholder="Mbti 입력"
          value={mbti}
          onChange={mbtiChange}
        />
        {/* submit에 관해서만 폼 안에서는 온클릭 잘 안씀 */}
        <button type={"submit"}>추가</button>
      </form>
    </Wrapper>
  );
}

export default TestFbase;

const Wrapper = styled.div`
  margin: auto;
`;
