import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import {bootstrap} from "next/dist/build/output/log";

import TestBoo from "../img/testBoo.png"
import TestMemo from "../img/testMemo.png";

function TestSN () {
    return (
        <>
            <Container>
                <TestDiv>
                    {/*01.*/}
                    <QuestionDiv>
                        <Question>
                            <p>질문입니다</p>
                            <Image src={TestMemo} />
                        </Question>
                        <Answer>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={"BtnA"}/>
                            </Btn>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={"BtnB"}/>
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
                                    className={"BtnA"}/>
                            </Btn>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={"BtnB"}/>
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
                                    className={"BtnA"}/>
                            </Btn>
                            <Btn>
                                <button
                                    type={'button'}
                                    className={"BtnB"}/>
                            </Btn>
                        </Answer>
                    </QuestionDiv>
                </TestDiv>
                <Image src={TestBoo}/>
                <TestBtn>
                    <Link href={'/testSN'}>
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
const Question=styled.div``;
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
  padding: 1rem;

  border-radius: 1.25rem;
  background: #FFF;

  .BtnA{
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
export default TestSN;