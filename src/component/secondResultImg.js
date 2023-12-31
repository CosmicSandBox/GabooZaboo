import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";

import File from "@/img/file.png";
import Image from "next/image";

import {findMbti} from "../../firebase/fbase";

function SecondResultImg({mbti :Mbti}){

    const [data, setData] = useState([]);
    const getData = async () => {
        const res = await findMbti("other_results",Mbti);
        setData(res);

    };

    useEffect(() => {
        getData()
    }, []);
    return(
        <>
            {data.map((item, index)=>(
                <Container key={index}>
                    <Image src={File} alt={'bg파일이미지'} className={'bgImg'} />
                    <ContentDiv>
                        <ContentHeader>
                            <Image src={item.flag_img} alt={'flag_img'} width={60} height={40}/>
                            <p>{item.country}</p>
                        </ContentHeader>
                        <ContentText>
                            <p>{item.mbti_feature}에 맞는 곳을 찾아봤어 (●'◡'●)</p>
                            <p>{item.country}를 향해 가부자부~!</p>
                        </ContentText>
                    </ContentDiv>
                </Container>
            ))}

        </>
    )
}

export default SecondResultImg

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
  top: 20rem;
  left: 3rem;

  display: flex;
  flex-direction: column;
`;
const ContentHeader=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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
  margin-top: 0.5rem;
  margin-left: 0.15rem;
  
  width: 18rem;
`;