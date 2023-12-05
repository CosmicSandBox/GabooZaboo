import React, {useEffect, useState} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import {FaCheck} from "react-icons/fa6";

import TestBoo from "@/img/question.png"
import TestMemo from "@/img/testmemo.png";
import {getCollectionAll, updateArray} from "../../firebase/fbase";
import GBJB from "@/img/GBJB.png";

function TestFT () {
    const [qnaData, setQnaDate] = useState([]);
    const [answerF, setAnswerF] = useState([]);
    const [answerT, setAnswerT] = useState([]);
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

    const handle_FnT_value = (value) => {
        if (value === "F") {
            setAnswerF((prevAnswer1) => [...prevAnswer1, value]);
        } else if (value === "T") {
            setAnswerT((prevAnswer2) => [...prevAnswer2, value]);
        } else {
            console.error("Invalid button value");
        }
    };

    const submitFnT = (e) => {
        e.preventDefault();
        const mbtiValue = answerF.length > answerT.length ? 'F' : 'T';
        // console.log("user_mbti", mbtiValue);
        updateArray("user","user","mbti",mbtiValue)
        get_userMbti();
    };

    useEffect(() => {
        getQnA();
        get_userMbti();
    }, []);

    return (
        // a1 = F, a2 = T
        <>
            {qnaData.map((item, index)=>(
                <Container key={index}>
                    <Image src={GBJB} className={"Header"}/>
                    <div>
                        {/*01-1.문제랑 선택지 div*/}
                        <QuestionDiv>
                            {/*01-1-1.문제*/}
                            <Question>
                                {/*img랑 p태그 위치 바꾸기. p태그가 상단에 있게*/}
                                <p className={'Question-text'}>{item.id_7.q}</p>
                                <QuestionImg>
                                    <Image src={TestMemo}/>
                                </QuestionImg>
                            </Question>
                            {/*01-1-2.선택지*/}
                            <AnswerBtnDiv>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_FnT_value("F")}
                                        // onClick={handleBtn}
                                    />
                                    <p className={'answerText'}>{item.id_7.a1} (⸝⸝⸝ᵒ̴̶̷̥́ ᵕ ก̀⸝⸝⸝)ෆ</p>
                                </Btn>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_FnT_value("T")}
                                    />
                                    <p className={'answerText'}>{item.id_7.a2}(；☉_☉) </p>
                                </Btn>
                            </AnswerBtnDiv>
                        </QuestionDiv>

                        {/*01-2.문제랑 선택지 div*/}
                        <QuestionDiv>
                            {/*01-2-01.문제지*/}
                            <Question>
                                <p className={'Question-text'}>{item.id_8.q}</p>
                                <QuestionImg>
                                    <Image src={TestMemo}/>
                                </QuestionImg>
                            </Question>
                            {/*01-2-02.선택지*/}
                            <AnswerBtnDiv>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_FnT_value("F")}/>
                                    <p className={'answerText'}>{item.id_8.a1} ｡°(°.◜ᯅ◝°)°｡</p>
                                </Btn>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_FnT_value("T")}/>
                                    <p className={'answerText'}>{item.id_8.a2}(◔_◔)</p>
                                </Btn>
                            </AnswerBtnDiv>
                        </QuestionDiv>

                        {/*01-3.문제랑 선택지 div*/}
                        <QuestionDiv>
                            {/*01-3-1.문제지*/}
                            <Question>
                                <p className={'Question-text'}>{item.id_9.q}</p>
                                <QuestionImg>
                                    <Image src={TestMemo}/>
                                </QuestionImg>
                            </Question>
                            {/*01-3-2.선택지*/}
                            <AnswerBtnDiv>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_FnT_value("F")}/>
                                    <p className={'answerText'}>{item.id_9.a1}٩(இ ⌓ இ๑)۶</p>
                                </Btn>
                                <Btn>
                                    <button
                                        type={'button'}
                                        className={'BtnSize'}
                                        onClick={() => handle_FnT_value("T")}/>
                                    <p className={'answerText'}>{item.id_9.a2}Σ٩(๑º ﾛ º๑)۶</p>
                                </Btn>
                            </AnswerBtnDiv>
                        </QuestionDiv>

                        {/*01-4. 다음 문제 이동 버튼*/}
                        <NextButton type={'submit'} onClick={submitFnT}>
                            <Link href={'/testJP'}>
                                <p>🌟 다음 질문 이동 9/12</p>
                            </Link>
                        </NextButton>

                        {/*02.부 이미지*/}
                        <Image src={TestBoo} className={'booImg'}/>
                    </div>
                </Container>
            ))}
        </>
    );
}
//전체 div
const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  align-items: center;

  //margin-top: 3rem;
  //하단의 부 위치 css
  .booImg{
    margin-top: 1rem;
  }
  .Header{
    position: absolute;
    right: 1rem;
    top: 1rem;

    z-index: 1;
  }
`;
//질문 메모지랑 버튼 2개 div
const QuestionDiv=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: flex-start;
  text-align: left;

  //padding: 1.5rem;
  margin-top: 2.2rem;
  //margin-left: 3rem;

  //background-color: yellow;
  //border-color: red;
  //border-style: solid;
`;

//질문 메모지 div
const Question=styled.div`
  display: flex;
  flex-direction: row;

  text-align: center;

  //width: 14.0625rem;
  height: 19.875rem;
  flex-shrink: 0;


  //메모지 안 질문(텍스트)
  .Question-text{
    width: 13.0625rem;
    //width: 14.0625rem;
    //height: 11.875rem;
    z-index: 1;

    display: flex;
    flex-wrap: wrap;

    margin-top: 6.3rem;
    margin-left: 5.5rem;

    color: #2F5B79;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  //메모지 이미지
  .Question-image{
    width: 18.0625rem;
    height: 18.75rem;
    flex-shrink: 0;

    z-index: 0;

    position: absolute;
    //margin: 1.25rem;
    margin-left: 2.5rem;
    margin-top: 0.5rem;
  }
`;
const QuestionImg=styled.image`
  width: 18.0625rem;
  height: 18.75rem;
  flex-shrink: 0;

  z-index: 0;

  position: absolute;
  //margin: 1.25rem;

  margin-left: 2.7rem;
  margin-top: 0.5rem;
`

//버튼 2개 div
const AnswerBtnDiv=styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.6rem;
`;

//버튼 요소 div
const Btn=styled.div`
  width: 19.875rem;
  height: 4.6875rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;

  padding: 0.5rem;
  margin: 0.5rem;

  border-radius: 1.25rem;
  border-color: #f0f0f0;
  border-style: solid;

  &:hover{
    border-color: #0095B5;
  }
  
  p{
    margin: auto 0.5rem;
    flex-wrap: wrap;

    font-size: 0.8375rem;
  }
  .BtnSize{
    width: 2.625rem;
    height: 2.625rem;
    flex-shrink: 0;
    margin: 0.5rem;

    border: none;
    outline: none;

    border-radius: 50%;

    &:active{
      background-color: #0095B5;
    }
  }

  .answerText{
    //width: 15.4375rem;
    width: 14rem;
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
  background: #0095B5;
  color: white;
  font-weight:bold;

  border: none;
  outline: none;

`;
export default TestFT;