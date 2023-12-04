import React, {useEffect, useState} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import {FaCheck} from "react-icons/fa6";

import TestBoo from "@/img/question.png"
import TestMemo from "@/img/testmemo.png";
import {getCollectionAll, updateArray} from "../../firebase/fbase";

function TestJP () {
    const [qnaData, setQnaDate] = useState([]);
    const [answerJ, setAnswerJ] = useState([]);
    const [answerP, setAnswerP] = useState([]);
    const [user_mbti, setUser_mbti] = useState([]);


    const getQnA = async () => {
        const QnAData = await getCollectionAll("question");
        setQnaDate(QnAData);
        // console.log("qnaData",qnaData)
    };

    const get_userMbti = async () => {
        const res = await getCollectionAll("user");
        setUser_mbti(res);
        // console.log("user_mbti",user_mbti)
    };

    const handle_JnP_value = (value) => {
        if (value === "J") {
            setAnswerJ((prevAnswer1) => [...prevAnswer1, value]);
        } else if (value === "P") {
            setAnswerP((prevAnswer2) => [...prevAnswer2, value]);
        } else {
            console.error("Invalid button value");
        }
    };

    const submitJnP= (e) => {
        e.preventDefault();
        const mbtiValue = answerJ.length > answerP.length ? 'J' : 'P';
        // console.log("user_mbti", mbtiValue);
        updateArray("user","user","mbti",mbtiValue)
        get_userMbti();
    };

    useEffect(() => {
        getQnA();
        get_userMbti();
    }, []);

    return (
        <>
            {qnaData.map((item, index)=>(
                <Container key={index}>
                    {/*01.네이비색 백그라운드 div*/}
                    <TestDiv>
                        {/*01-1.문제랑 선택지 div*/}
                        <QuestionDiv>
                            {/*01-1-1.문제*/}
                            <Question>
                                <Image src={TestMemo} className={'Question-image'}/>
                                <p className={'Question-text'}>{item.id_10.q}</p>
                            </Question>
                            {/*01-1-2.선택지*/}
                            <AnswerBtnDiv>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_JnP_value("J")}
                                        // onClick={handleBtn}
                                    />
                                    <p className={'answerText'}>{item.id_10.a1}</p>
                                </Btn>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_JnP_value("P")}
                                    />
                                    <p className={'answerText'}>{item.id_10.a2}</p>
                                </Btn>
                            </AnswerBtnDiv>
                        </QuestionDiv>
                        {/*01-2.문제랑 선택지 div*/}
                        <QuestionDiv>
                            {/*01-2-01.문제지*/}
                            <Question>
                                <p>{item.id_11.q}</p>
                                <Image src={TestMemo} />
                            </Question>
                            {/*01-2-02.선택지*/}
                            <AnswerBtnDiv>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_JnP_value("J")}/>
                                    <p className={'answerText'}>{item.id_11.a1}</p>
                                </Btn>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_JnP_value("P")}/>
                                    <p className={'answerText'}>{item.id_11.a2}</p>
                                </Btn>
                            </AnswerBtnDiv>
                        </QuestionDiv>
                        {/*01-3.문제랑 선택지 div*/}
                        <QuestionDiv>
                            {/*01-3-1.문제지*/}
                            <Question>
                                <p>{item.id_12.q}</p>
                                <Image src={TestMemo} />
                            </Question>
                            {/*01-3-2.선택지*/}
                            <AnswerBtnDiv>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_JnP_value("J")}/>
                                    <p className={'answerText'}>{item.id_12.a1}</p>
                                </Btn>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_JnP_value("P")}/>
                                    <p className={'answerText'}>{item.id_12.a2}</p>
                                </Btn>
                            </AnswerBtnDiv>
                            {/*01-4. 다음 문제 이동 버튼*/}
                            <NextButton type={'button'} onClick={submitJnP}>
                                <Link href={'/result'}>
                                    <p>결과 보러 가기</p>
                                </Link>
                            </NextButton>
                        </QuestionDiv>
                    </TestDiv>
                    {/*02.부 이미지*/}
                    <Image src={TestBoo} className={'booImg'}/>
                </Container>
            ))}

        </>
    );
}
const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  margin-top: 3rem;
  
  //하단의 부 위치 css
  .booImg{
    margin-top: 1rem;
  }
`;

//네이비색 div css
const TestDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 22.3125rem;
  height: 34.25rem;
  flex-shrink: 0;
  margin-top: 1rem;

  border-radius: 2.3125rem;
  background: #2F5B79;

  overflow: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: none;
  }
  
`;

//질문 메모지랑 버튼 2개 div
const QuestionDiv=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 1.5rem;
`;

//질문 메모지 div
const Question=styled.div`
  
  //메모지 안 질문(텍스트)
  .Question-text{
      z-index: 1;
      right: 0;
      top: 0;
      color:red;
  }
  //메모지 이미지
  .Question-image{
    z-index: 0;
  }
`;

//버튼 2개 div
const AnswerBtnDiv=styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

//버튼 요소 div
const Btn=styled.div`
  width: 19.875rem;
  height: 4.6875rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  text-align: left;
  
  padding: 1rem;
  margin: 0.5rem;

  border-radius: 1.25rem;
  background: #FFF;
  
  p{
    margin: auto 1rem;
    flex-wrap: wrap;
  }
  .BtnSize{
    width: 2.625rem;
    height: 2.625rem;
    flex-shrink: 0;
    
    border: none;
    outline: none;
    
    border-radius: 50%;
    
    &:active{
      background-color: #0095B5;
    }
  }
  
  .answerText{
    width: 15.4375rem;
    height: 3.375rem;
    flex-shrink: 0;
    
    flex-wrap: wrap;
  }
`;

const NextButton=styled.button`
  width: 18.75rem;
  height: 3.125rem;
  flex-shrink: 0;
  
  margin-top: 0.5rem;
  
  border-radius: 3.125rem;
  //background: #F0F0F0;
  background-color: white;
  //color:#0095B5;
  color: #2F5B79;
  font-weight: bold;
  
  border: none;
  outline: none;
  
  &:hover{
    background: #0095B5;
    color: white;
    font-weight:bold;
  }
`;
export default TestJP;