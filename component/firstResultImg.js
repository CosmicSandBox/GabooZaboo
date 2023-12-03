import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import File from "../pages/img/file.png"
import Image from "next/image";

import Flag from "../pages/imgTest/flag_img.png"

import {ImGift} from "react-icons/im";
function FirstResultImg(){

    return(
        <>
            <Container>
                <Image src={File} className={'bgImg'} alt={'Bg파일이미지'}/>
                <ContentDiv>
                    <ContentHeader>
                        {/*원본코드-이거 사용하시면 됩니당*/}
                        {/*<Image src={'flag_img'} alt={'flag_img'}/>*/}

                        {/*테스트용 코드*/}
                        <Image src={Flag} alt={'flag_img'}/>
                        <p>인도</p>
                    </ContentHeader>
                    <ContentText>
                        {/*원본코드-이거 사용하심 됩니당~*/}
                        {/*<p>{say_hello}</p>*/}
                        {/*<p>{user_name} 의 여행스타일은 {user_mbti}네!</p>*/}
                        {/*<p>그럼 {country} 은/는 어때?</p>*/}

                        <p>say_hello</p>
                        <p>도마아아앙의 여행스타일은 isfj네!</p>
                        <p>그럼 인도 은/는 어때?</p>
                    </ContentText>
                </ContentDiv>

            </Container>
        </>
    )
}
const Container=styled.div`
  display: flex;
  flex-direction: column;
  .bgImg{
    z-index: 0;
    position: absolute;
    top: 15rem;
    //left: 1.56rem;
    left:1.66rem
  }
`;
const ContentDiv=styled.div`
  z-index: 1;
  
  position: absolute;
  top: 20.5rem;
  left: 3.56rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentHeader=styled.div`
  display: flex;
  flex-direction: row;
  text-align:left;
  align-items: flex-start;
  p{
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`;
const ContentText=styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
  
`;
export default FirstResultImg;