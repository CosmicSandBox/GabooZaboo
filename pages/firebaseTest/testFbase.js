import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  addDocument,
  getCollectionAll,
  deleteDocument, overwrightDocument, updateField, getDocument,
} from "../../firebase/fbase";
import {getDoc} from "firebase/firestore";

function TestFbase() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  // export const getDocument = async (collectionName, documentId) => {
  const getUsers = async () => {
    const data = await getCollectionAll("user");
    setUsers(data);
    console.log("users",users)
  };
  useEffect(() => {
    getUsers();
  }, []);

  const resetForm = () => {
    setName("");
  };

  // export const  updateField = async (collectionName, documentId ,fieldName,element) =>{
  // const handleSubmit = (e) => {
  //   // 돔에서 일어나는 이벤트의 기본적인 속성 막음 =>form 사용할 때 써야됨
  //   e.preventDefault();
  //   resetForm();
  //   addDocument("user", {
  //     name,
  //   });
  //   getUsers();
  // };

  const handleSubmit = (e) => {
      // 돔에서 일어나는 이벤트의 기본적인 속성 막음 =>form 사용할 때 써야됨
      e.preventDefault();
      resetForm();
      updateField("user", "user", "name",name);
      getUsers();
    };


  const Delete = (id) => {
    deleteDocument("user", id);
    getUsers();
  };

  return (
    <Wrapper>
      <h2>testFbase.js</h2>
      {users.map((user) => (
        <div>
          <p>이름:{user.name}</p>
          <p>mbti:{user.mbti}</p>
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
