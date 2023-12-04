import React from "react";
import styled from "@emotion/styled";
import FinalResultImg from "@/component/finalResultImg";
import Link from "next/link";
import {GrPowerReset} from "react-icons/gr";
import {RiMenuAddLine} from "react-icons/ri";

function anotherResult () {
    return (
    <>
        <Container>
            <FinalResultImg name={"BOO"} />
            <button type={"button"} className={'Departure'}>🛫 출국하기</button>
            <ResultBtns>
                <Btns type={"button"}>
                    <Link href={'/'}>
                        <GrPowerReset />
                        <p>다시하기</p>
                    </Link>
                </Btns>
                <Btns type={"button"}>
                    <Link href={'/category'}>
                        <RiMenuAddLine />
                        <p>다른 결과 보러가기</p>
                    </Link>
                </Btns>
            </ResultBtns>
        </Container>
    </>
    );
  }
  
  export default anotherResult;


const Container=styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
    .Departure{
      width: 9.5625rem;
      height: 2.3125rem;
      flex-shrink: 0;

      margin-top: 1.25rem;
      border-radius: 1.25rem;
      background: #B5D5E9;
      
      border: none;
      outline: none;
      
      color: #2F5B79;
      font-weight: 500;
      
      &:hover{
        font-weight: bold;
      }
    }
`;
const ResultBtns=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  flex: 1;
  
  margin-top: 1rem;
  
  outline: none;
  border: none;
`;

const Btns=styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  margin: 1rem;

  background-color: transparent;
  color: #2F5B79;
  font-size: 0.725rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  outline: none;
  border: none;
  
  p{
    margin-top: 0.5rem;
  }
  
  &:hover{
    font-weight: bold;
  }
`;
