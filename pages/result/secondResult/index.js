import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import SecondResultImg from "@/component/secondResultImg";

function SecondResult () {
    return (
    <>
        <Container>
            <SecondResultImg />
            <Btns>
                <Link href={'/result'}>
                    <ResultBtn>
                        <p>🔙 이전 내용 보기</p>
                    </ResultBtn>
                </Link>
                <Link href={'/result/finalResult'}>
                    <ResultBtn className={'FinalResultBtn'}>
                        <p>📚 최종 결과 보기</p>
                    </ResultBtn>
                </Link>
            </Btns>
        </Container>
    </>
    );
  }
const Container=styled.div``;
const Btns=styled.div`
  display: flex;
  flex-direction: column;
  
  //margin-top: 2rem;
  
  position: absolute;
  //bottom: 8rem;
  left: 2.75rem;


  position: absolute;
  bottom: 3rem;
`;
const ResultBtn=styled.button`
  width: 18.75rem;
  height: 3.125rem;
  flex-shrink: 0;
  //margin-top: 1rem;
  
  border-radius: 3.125rem;
  background: #F0F0F0;
  border: none;
  outline: none;
  
  margin-top: 1rem;
  &:hover{
    font-weight: bold;
    color: white;
    background-color: #0095B5;
  }
  
`;
export default SecondResult;