import React, { useEffect, useState } from "react";
import {
  addDocument,
  getCollectionAll,
  getDocument, updateArray,
  updateDocument,
} from "../../firebase/fbase";
import css from "styled-jsx/css";

function ResultTest() {
  const [qnaData, setQnaDate] = useState([]);
  const [answerE, setAnswerE] = useState([]);
  const [answerI, setAnswerI] = useState([]);
  const [answerS, setAnswerS] = useState([]);
  const [answerN, setAnswerN] = useState([]);
  const [user_mbti, setUser_mbti] = useState([]);

  const getQnA = async () => {
    const QnAData = await getCollectionAll("question");
    setQnaDate(QnAData);
    console.log("qnaData",qnaData)
  };
  const get_userMbti = async () => {
    const res = await getCollectionAll("user");
    setUser_mbti(res);
    console.log("user_mbti",user_mbti)
  };

  const handle_EnI_value = (value) => {
    if (value === "E") {
      setAnswerE((prevAnswer1) => [...prevAnswer1, value]);
    } else if (value === "I") {
      setAnswerI((prevAnswer2) => [...prevAnswer2, value]);
    } else {
      console.error("Invalid button value");
    }
    console.log("answerE", answerE);
    console.log("answerI", answerI);
  };
  const handle_NnS_value = (value) => {
    if (value === "N") {
      setAnswerN((prevAnswer1) => [...prevAnswer1, value]);
    } else if (value === "S") {
      setAnswerS((prevAnswer2) => [...prevAnswer2, value]);
    } else {
      console.error("Invalid button value");
    }
  };

  // const handleSubmit = (e) => {
  //   // 돔에서 일어나는 이벤트의 기본적인 속성 막음 =>form 사용할 때 써야됨
  //   e.preventDefault();
  //   resetForm();
  //   addDocument("user", {
  //     name,
  //     mbti:'',
  //   });
  //   getUsers();
  // };


  const submitEnI = (e) => {
      e.preventDefault();
    const mbtiValue = answerE.length > answerI.length ? 'E' : 'I';
    // const updatedMbti = mbtiValue;
    console.log("user_mbti", mbtiValue);
    // export const updateArray = async (collectionName, documentI, fieldName,element) =>{
    updateArray("user","user","mbti",mbtiValue)
    get_userMbti();
    };

  const submitNnS = (e) => {
    e.preventDefault();
    const mbtiValue = answerN.length > answerS.length ? 'N' : 'S';
    // const updatedMbti = mbtiValue;
    console.log("user_mbti", mbtiValue);
    // export const updateArray = async (collectionName, documentI, fieldName,element) =>{
    updateArray("user","user","mbti",mbtiValue)
    get_userMbti();
  };

  // const submitNnS= (e) => {
  //     e.preventDefault();
  //     if(!user_mbti) retrun;
  //     // if (answerN.length > answerS.length) {
  //     //     setUser_mbti((prev) => [user_mbti,'S']);
  //     // } else {
  //     //     setUser_mbti((prev) => [user_mbti,'I']);
  //     // }
  //     updateDocument("answer", "user_mbti", {
  //         user_mbti: user_mbti,
  //     });
  //     getNnS();
  // }

  useEffect(() => {
    getQnA();
    get_userMbti();
  }, []);

  return (
    <>
      <h1>여기는 resultTest.js</h1>

      {qnaData.map((item, index) => (
        <div key={index}>
          <h1>{item.id_1.q}</h1>
          <p>{item.id_1.a1}</p>
          <button onClick={() => handle_EnI_value("E")}>Button E</button>
          <p>{item.id_1.a2}</p>
          <button onClick={() => handle_EnI_value("I")}>Button I</button>

          <h1>{item.id_2.q}</h1>
          <p>{item.id_2.a1}</p>
          <button onClick={() => handle_EnI_value("E")}>Button E</button>
          <p>{item.id_2.a2}</p>
          <button onClick={() => handle_EnI_value("I")}>Button I</button>

          <h1>{item.id_3.q}</h1>
          <p>{item.id_3.a1}</p>
          <button onClick={() => handle_EnI_value("E")}>Button E</button>
          <p>{item.id_3.a2}</p>
          <button onClick={() => handle_EnI_value("I")}>Button I</button>

            <form onSubmit={submitEnI}>
                <button type={'submit'}>다음페이지로 이동</button>
            </form>

          <h1>{item.id_4.q}</h1>
          <p>{item.id_4.a1}</p>
          <button onClick={() => handle_NnS_value("N")}>Button N</button>
          <p>{item.id_4.a2}</p>
          <button onClick={() => handle_NnS_value("S")}>Button S</button>

          <form onSubmit={submitNnS}>
              <button type='submit'>다음페이지로 이동</button>
          </form>
          {/*<form onSubmit={submitMbti}>*/}
          {/*    <button type='submit'>다음페이지로 이동</button>*/}
          {/*</form>*/}
        </div>
      ))}
      {user_mbti.map((i)=>(
          <div>
            <p>{i.name}</p>
            <p>{i.mbti}</p>
          </div>
      ))}

    </>
  );
}
export default ResultTest;
