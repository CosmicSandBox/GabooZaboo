import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import File from "@/img/file.png";
import Image from "next/image";

import Flag from "@/imgTest/flag_img.png"
import Boo from "@/imgTest/boo_img.png"

function SecondResultImg(){

    return(
        <>
            <Container>
                <ContentDiv>
                    <Image src={File} alt={'bg파일이미지'} className={'bgImg'}/>
                    <ContentHeader>
                        {/*원본코드-이거 사용하시면 됩니당*/}
                        {/*<Image src={'flag_img'} alt={'flag_img'}/>*/}

                        {/*테스트 코드*/}
                        <Image src={Flag} alt={'flag_img'}/>
                        <p>인도</p>
                    </ContentHeader>
                    <ContentText>
                        {/*원본 코드 - 이거 사용하시면 됩니다!*/}
                        {/*<p>{mbti_feature}</p>*/}
                        {/*<p>{country} 로/으로 가부자부~!</p>*/}

                        {/*테스트 코드*/}
                        <p>설명</p>
                        <p>인도 로/으로 가부자부~!</p>
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
    left: 1.56rem;
  }
`;
const ContentDiv=styled.div`
  z-index: 1;
`;
const ContentHeader=styled.div`
  display: flex;
  flex-direction: revert;
  align-items: center;
  p{
    margin-left: 1rem;
  }
`;
const ContentText=styled.div`

`;
export default SecondResultImg