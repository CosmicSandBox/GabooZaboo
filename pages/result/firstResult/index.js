import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import File from "../../img/file.png";
import Image from "next/image";
function FirstResult () {
    return (
    <>
        <Container>
            <FirstResultImg>
                <p className={"FirstText"}>결과 페이지 1 - 나라 추천 </p>
                <Image src={File} className={"FirstImg"}/>
            </FirstResultImg>
            <Link href={'/result'}>
                <button>뒤로가기</button>
            </Link>
        </Container>
    </>
    );
  }
const Container=styled.div`
`
const FirstResultImg=styled.div`
  .FirstText{
    z-index: 1;
    position: absolute;
    left: 2rem;
    top: 2rem;
  }
  .FirstImg{
    z-index: 0;
  }
`;
  export default FirstResult;