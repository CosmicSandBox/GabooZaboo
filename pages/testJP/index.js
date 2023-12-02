import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import {bootstrap} from "next/dist/build/output/log";

import TestBoo from "../img/testBoo.png"
import TestMemo from "../img/testMemo.png";

function TestJP(){
    return(
        <>
            <Container>
                <TestQuestion>
                    {/*01.*/}
                    <Question>
                        <Image src={TestMemo} />
                        <QuestionBtns>
                            <TestBtnA>
                                <button
                                    type={'button'}
                                    className={"BtnA"}/>
                            </TestBtnA>
                            <TestBtnB>
                                <button
                                    type={'button'}
                                    className={"BtnB"}/>
                            </TestBtnB>
                        </QuestionBtns>
                    </Question>
                    {/*02.*/}
                    <Question>
                        <Image src={TestMemo} />
                        <TestBtnA>
                            <button
                                type={'button'}
                                className={"BtnA"}
                            />
                            <p></p>
                        </TestBtnA>
                        <TestBtnB>
                            <button
                                type={'button'}
                                className={"BtnB"}
                            />
                        </TestBtnB>
                    </Question>
                    {/*03.*/}
                    <Question>
                        <Image src={TestMemo} />
                        <TestBtnA>
                            <button
                                type={'button'}
                                className={"BtnA"}
                            />
                            <p></p>
                        </TestBtnA>
                        <TestBtnB>
                            <button
                                type={'button'}
                                className={"BtnB"}
                            />
                        </TestBtnB>
                    </Question>
                </TestQuestion>
                <Image src={TestBoo}/>
                <TestBtns>
                    <Link href={'/result'}>
                        <button>결과페이지이동</button>
                    </Link>
                    <Link href={'/testFT'}>
                        <button>FT이동</button>
                    </Link>
                </TestBtns>
            </Container>
        </>
    )
}
const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const TestQuestion = styled.div`
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
const Question=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 2rem;
`;
const QuestionBtns=styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
const TestBtnA=styled.div`
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
const TestBtnB=styled.div`
  //width: 19.875rem;
  //height: 4.6875rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  padding: 1rem;

  border-radius: 1.25rem;
  background: #FFF;
  
  .BtnB{
    width: 2.625rem;
    height: 2.625rem;
    flex-shrink: 0;
  }
`;
const TestBtns=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default TestJP;