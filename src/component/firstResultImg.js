import React, {useEffect, useState} from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import File from "@/img/file.png"
import Image from "next/image";

import Flag from "@/imgTest/flag_img.png"

import {ImGift} from "react-icons/im";
import {getCollectionAll} from "../../firebase/fbase";
function FirstResultImg({name, mbti}){
    const [data, setData] = useState([]);
    const getRecommend = async () => {
        const res = await getCollectionAll("recommend");
        setData(res);
    };
    useEffect(() => {
        getRecommend();
    }, []);

    return(
        <>
            {data.map((item, index)=>(
                <Container key={index}>
                    <Image src={File} className={'bgImg'} alt={'Bg파일이미지'}/>
                    <ContentDiv>
                        <ContentHeader>
                            {/*원본코드-이거 사용하시면 됩니당*/}
                            {/*<Image src={'flag_img'} alt={'flag_img'}/>*/}
                            {/*테스트용 코드*/}
                            <Image src={Flag} alt={'flag_img'}/>
                            <p>{item.country}</p>
                        </ContentHeader>
                        <ContentText>
                            {/*원본코드-이거 사용하심 됩니당~*/}
                            {/*<p>{say_hello}</p>*/}
                            {/*<p>{user_name} 의 여행스타일은 {user_mbti}네!</p>*/}
                            {/*<p>그럼 {country} 은/는 어때?</p>*/}

                            <p>{item.sya_hello}</p>
                            <p>{name} 여행스타일은 {mbti}네!</p>
                            <p>그럼 {item.country} 은/는 어때?</p>
                        </ContentText>
                    </ContentDiv>

                </Container>
            ))}

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
`;
const ContentHeader=styled.div`
  display: flex;
  flex-direction: revert;
  align-items: center;

  position: absolute;
  left: 3rem;
  top: 20rem;

  p{
    margin-left: 1rem;

    color: #2F5B79;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
  }

  z-index: 1;
`;
const ContentText=styled.div`
  position: absolute;
  top: 24rem;
  left: 3.5rem;
`;
export default FirstResultImg;