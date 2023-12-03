import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";

import Barcode from "../pages/img/barcode.png";
import Barcode02 from "../pages/img/barcode02.png";
import Ticket from '../pages/img/finalResultImg.png';
import { IoAirplane } from "react-icons/io5";


//test용 img
import Flag from "../pages/imgTest/flag_img.png";
import Boo from "../pages/imgTest/boo_img.png";

function FinalResultImg(){
    return(
        <>
            <Container>
                <Image src={Ticket} alt={'finalResultImg'} className={'ticketImg'}/>
                <ContentDiv>
                    {/*01.전통의상 부*/}
                    {/*01-1. 원본코드 -이거 사용하시면 됩니다!*/}
                    {/*<Image src={'boo_img'} alt={'boo_img전통의상'}/>*/}

                    {/*01-2.테스트용 코드*/}
                    <Image src={Boo} alt={'boo_img전통의상'} className={'booImg'}/>

                    {/*02.티켓 주요 내용(흰바탕 위 모든 요소)*/}
                    <NationContent>
                        <p className={'boardingPass'}>BOARDING PASS</p>
                        <DepartureHeader>
                            <p>HUFS</p>
                            <IoAirplane />
                            {/*02-1.원본코드 - 이거 사용하세용*/}
                            {/*<p>{'airport'}</p>*/}

                            {/*02-2.테스트용 코드*/}
                            <p>DEL</p>
                        </DepartureHeader>
                        <DepartureUser>
                            {/*02-1.원본코드 - 이거 사용하세용~*/}
                            {/*<p>PASSENGER : {'user_name'}</p>*/}

                            {/*02-2.테스트용 코드*/}
                            {/*<p className={'passengerWrap'}>PASSENGER : 도마아아앙</p>*/}
                            <div className={'passengerDiv'}>
                                <p>PASSENGER : </p>
                                <p>도마아아앙</p>
                            </div>
                            <div className={'GateSeatDiv'}>
                                <p>GATE : 20 </p>
                                <p className={'Seat'}>SEAT : 23A </p>
                            </div>
                            <p>FLIGHT : 57901H</p>
                            <p>CLASS NAME : BUSINESS</p>
                        </DepartureUser>
                        <Line />
                        <RecommendPlace>
                            {/*02-1.원본코드 - 이거 사용하세요!!*/}
                            {/*<p>추천 여행지 :</p>*/}
                            {/*<p>{'location1'}</p>*/}
                            {/*<p>{'location2'}</p>*/}
                            {/*<p>{'location3'}</p>*/}

                            {/*02-2.테스트용 코드*/}
                            <p className={'recommendTitle'}>추천 여행지 :</p>
                            <div className={'recommendContents'}>
                                <p>아그라 - 타지마할아그라 - 타지마할아그라 - 타지마할아그라 - 타지마할아그라 - 타지마할아그라 - 타지마할</p>
                                <p>자이푸르 - 안 벨성</p>
                                <p>뉴델리 - 꾸뚭 미나르</p>
                            </div>
                        </RecommendPlace>
                        <ContentBottom>
                            <BottomHeader>
                                {/*02-1.원본코드 - 이거 사용하세용*/}
                                {/*<Image src={'flag_img'} alt={'flag_img'}/>*/}
                                {/*<p>{'country'}</p>*/}

                                {/*02-2.테스트용 코드*/}
                                <Image src={Flag} alt={'flag_img'}/>
                                {/*<p>INDIA</p>*/}
                                <p>INDONESIA</p>
                            </BottomHeader>
                            <Line />
                            <Image src={Barcode} alt={'바코드'} className={'Barcode'}/>
                        </ContentBottom>
                    </NationContent>

                    {/*03.티켓 오른쪽 숫자&바코드*/}
                    <TimeStamp>
                        <p>202312031657</p>
                        <Image src={Barcode02} alt={'세로바코드'}/>
                    </TimeStamp>
                </ContentDiv>
            </Container>
        </>
    )
}
const Container=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  margin-top: 3rem;
`;
const ContentDiv=styled.div`
  z-index: 1;

  display: flex;
  flex-direction: row;
  //align-items: center;
  
  position: absolute;
  //left: 1.5rem;
  left: 1.6rem;
  top: 3.94rem;
  
`;

{/*02.티켓 주요 내용(흰바탕 위 모든 요소)*/}
const NationContent=styled.div`
  display: flex;
  flex-direction: column;
  
  margin: auto 1rem;
  .boardingPass{
    color: #2F5B79;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

{/*02.티켓 주요 내용(흰바탕 위 모든 요소) : boardingpass / hufs -> country*/}
const DepartureHeader=styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  
  margin-top: 0.75rem;

  color: #2F5B79;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  p{
    margin: 0 0.5rem;
  }
`

{/*02.티켓 주요 내용(흰바탕 위 모든 요소) : 승객,게이트 ... 4줄 요소*/}
const DepartureUser=styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  
  margin-top: 1.5rem;
  p{
    margin: 0.31rem;
  }
  .passengerDiv{
    display: flex;
    flex-direction: row;
    .passengerWrap{
      display: flex;
      flex-flow: wrap;
      width: 3rem;
    } 
  }
  
  .GateSeatDiv{
    display: flex;
    flex-direction: row;

    .Seat{
      margin-left: 2rem;
    }
  }

`

{/*02.티켓 주요 내용(흰바탕 위 모든 요소) : 추천 여행지*/}
const RecommendPlace=styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  width: 12.375rem;
  height: 9.9375rem;
  flex-shrink: 0;

  p{
    margin: 0.2rem;
  }
  
  .recommendTitle{
    //margin: 0.5rem 0;
    margin-top: 0.81rem;
    margin-bottom: 1.27rem;
  }
  
  //추천 여행지명이 길때 wrap 속성css
  .recommendContents{
    flex-wrap: wrap;
  }
`

{/*02.티켓 주요 내용(흰바탕 위 모든 요소) : 국기,나라명,라인,바코드 */}
const ContentBottom=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: absolute;
  top: 29.5rem;

  .Barcode{
    width: 12.75rem;
    height: 2.50438rem;
    flex-shrink: 0;
  }
`
{/*02.티켓 주요 내용(흰바탕 위 모든 요소) : 바코드 안 국기랑 나라명 div*/}
const BottomHeader=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  p{
    margin-left: 1rem;
    color: #2F5B79;
    text-align: center;
    //font-size: 1.75rem;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

{/*03.티켓 오른쪽 숫자&바코드*/}
const TimeStamp=styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0.5rem;
  justify-content: flex-start;
  
  p{
    text-align: left;
    writing-mode: vertical-lr;
    -webkit-transform-style: revert;
  }
`
// 구분선 div
const Line=styled.div`
  width: 13.125rem;
  height: 0.125rem;
  flex-shrink: 0;
  
  background-color: #2F5B79;
  margin: 1rem 0;
`;
export default FinalResultImg