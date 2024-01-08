import React, {useEffect, useState} from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import File from "@/img/file.png"
import Image from "next/image";

import Flag from "@/imgTest/flag_img.png"

import {ImGift} from "react-icons/im";
import {findMbti, getCollectionAll} from "../../firebase/fbase";
function FirstResultImg({name, mbti:Mbti}){
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
                    <Image src={File} className={'bgImg'} alt={'Bg파일이미지'}/>
                    <ContentDiv>
                        <ContentHeader>
                            <Image src={item.flag_img} alt={'flag_img'} width={60} height={40}/>
                            {/*<Image src={"https://postfiles.pstatic.net/MjAyMzExMTlfODkg/MDAxNzAwMzkzMzYwMDg5.BKkfKDzqS8VzZfAj8iZdOG2WsgLurYfjC4d-b6jMI6Ig.TURU_PqbccS-fGHMH0aJ3Gkgu3jjkmw24SFuXOdiEZgg.PNG.esder1310/INTP_그리스.png?type=w773"} alt={'flag_img'}/>*/}
                            <p>{item.country}</p>
                        </ContentHeader>
                        <ContentText>

                            <p className={'textHeader'}>{item.say_hello}</p>
                            <p>{name} 여행스타일은 {Mbti}네!</p>
                            <p>그럼 {item.country} 어때?</p>
                        </ContentText>
                    </ContentDiv>

                </Container>
            ))}

        </>
    )
}
export default FirstResultImg;


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
  
  margin-top: 1.5rem;
  //margin-left: 1.6rem;
  margin-left: 2.5rem;
  
  .textHeader{
    margin-bottom: 1rem;
  }
  
`;