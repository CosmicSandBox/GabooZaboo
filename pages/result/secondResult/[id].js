import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import SecondResultImg from "@/component/secondResultImg";
import Image from "next/image";
import GBZB from "@/img/GBJB.png";
import {useRouter} from "next/router";

function SecondResult () {
    const router = useRouter()
    console.log("router",router)
    const user_mbti = router.query.id
    return (
    <>
        <Container>
            <Image src={GBZB} alt={'페이지 헤더'} className={'Header'}/>
            <SecondResultImg mbti={user_mbti}/>
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
export default SecondResult;

const Container=styled.div`
  .Header{
    position: absolute;
    right: 1rem;
    top: 1rem;

    z-index: 1;
  }
`;
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