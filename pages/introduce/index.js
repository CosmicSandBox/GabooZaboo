import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";

import Memo from "@/img/introduce.png";
import GBJB from "@/img/GBJB.png";

function IntroducePage () {
    return (
        <>
            <Container>
                <Image src={GBJB} className={"Header"}/>
                <MemoDiv>
                    <MemoText>
                        <p>종강을 앞둔 한국외대 학생들과</p>
                        <p>휴가를 얻은 졸업생들에게</p>
                        <p>mbti별 맟줌 질문을 통해</p>
                        <p>해외 여행지 추천 서비스를</p>
                        <p>제공해드립니다!!</p>
                    </MemoText>
                    <Image src={Memo} className={'IntroduceMemo'}/>
                </MemoDiv>
                {/*<Link href={'/testEI'}>*/}
                {/*    <GotoBtn*/}
                {/*        type={'button'}*/}
                {/*    >🛫 테스트하러 가부자부!!</GotoBtn>*/}
                {/*</Link>*/}
                <Link href={'/testEI'}>
                    <GotoBtn
                        type={'button'}
                    >🛫 테스트하러 가부자부!!</GotoBtn>
                </Link>
            </Container>
        </>
    );
}

export default IntroducePage;
const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    .Header{
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  `;
const MemoDiv=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin: 13rem auto 0 auto;
  .IntroduceMemo{
    z-index: 0;
  }

`;
const MemoText=styled.div`
  z-index: 1;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  margin-top: 2.8rem;
  text-align: center;
  //font-size: 1.125rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  //line-height: normal;
  line-height: 2rem;
`;
const GotoBtn=styled.button`
  width: 18.75rem;
  height: 3.125rem;
  flex-shrink: 0;
  text-align: center;
  align-items: center;
  padding-bottom: 0.2rem;

  margin: 2.69rem auto auto auto;

  border-radius: 3.125rem;
  background: #0095B5;
  color: white;
  
  border: none;
  outline: none;

  font-size: 1.125rem;
  //font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  &:hover{
    font-weight: 700;
  }
`;
