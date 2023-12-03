import React, {useState} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
// import ProgressBar from 'react-bootstrap/ProgressBar'
import {FaCheck} from "react-icons/fa6";

import TestBoo from "../img/question.png"
import TestMemo from "../img/testmemo.png";

function TestEI () {
    return (
        <>
            <Container>
                <TestDiv>
                    {/*01.*/}
                    <QuestionDiv>
                        <Question>
                            <p className={'Question-text'}>test text</p>
                            <Image src={TestMemo} className={'Question-image'}/>
                        </Question>
                        <Answer>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={'BtnSize'}
                                    // onClick={handleBtn}
                                ><FaCheck/></button>
                                <p>질문입니다.</p>
                            </Btn>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={'BtnSize'}
                                />
                                <p>질문입니다.</p>
                            </Btn>
                        </Answer>
                    </QuestionDiv>
                    {/*02.*/}
                    <QuestionDiv>
                        <Question>
                            <p>질문입니다</p>
                            <Image src={TestMemo} />
                        </Question>
                        <Answer>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={'BtnSize'}/>
                                <p>질문입니다.</p>
                            </Btn>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={'BtnSize'}/>
                                <p>질문입니다.</p>
                            </Btn>
                        </Answer>
                    </QuestionDiv>
                    {/*03.*/}
                    <QuestionDiv>
                        <Question>
                            <p>질문입니다</p>
                            <Image src={TestMemo} />
                        </Question>
                        <Answer>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={'BtnSize'}/>
                                <p>질문입니다.</p>
                            </Btn>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={'BtnSize'}/>
                                <p>질문입니다.</p>
                            </Btn>
                        </Answer>
                    </QuestionDiv>
                </TestDiv>
                <Image src={TestBoo} className={'booImg'}/>
                <TestBtn>
                    <Link href={'/result'}>
                        <button>SN이동</button>
                    </Link>
                    <Link href={'/introduce'}>
                        <button>뒤로가기</button>
                    </Link>
                </TestBtn>
            </Container>
        </>
    );
}
const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  
  .booImg{
    margin-top: 1rem;
  }
`;

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
const QuestionDiv=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 2rem;
`;
const Question=styled.div`
  //position: absolute;
    .Question-text{
      z-index: 1;
      right: 0;
      top: 0;
      color:red;
    }
  .Question-image{
    z-index: 0;
  }
`;
const Answer=styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
const Btn=styled.div`
  //width: 19.875rem;
  //height: 4.6875rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;

  border-radius: 1.25rem;
  background: #FFF;
  
  p{
    margin: auto 1rem;
  }
  .BtnSize{
    width: 2.625rem;
    height: 2.625rem;
    flex-shrink: 0;
  }
`;

const TestBtn=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default TestEI;