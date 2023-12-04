import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";

import GBJB from "@/img/GBJB.png";
import LoadingBoo from "@/img/loadingBoo.png";

function Loading(){

    return(
        <>
            <Container>
                <Image src={GBJB} alt={'페이지헤더GBZB'} className={'Header'}/>
                <Image src={LoadingBoo} alt={'로딩부'} className={'loadingBoo'}/>
                <Link href={'/result/finalResult'} className={'loadingText'}>
                    <p>로딩중</p>
                </Link>
            </Container>
        </>
    )
}
const Container=styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  .Header{
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  
  .loadingBoo{
    margin-top: 13.6rem;
  }
  
  .loadingText{
    margin-top: 7rem;
  }
`
export default Loading;