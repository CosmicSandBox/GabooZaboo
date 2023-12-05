import {React , useEffect} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";

import { useRouter } from "next/router";

import loadingBoo from "@/img/loadingBoo.png";
import GBZB from "@/img/GBJB.png";

function LoadingComponent(){

    const router=useRouter();

    useEffect(() => {
        //2초 뒤에 다음 페이지 이동
        const timeout=setTimeout(()=>{
            router.push('/result/finalResult');
        },1000);

        return ()=>clearTimeout(timeout);
    }, []);

    return(
        <>
            <Container>
                <Image src={GBZB} alt={'페이지 헤더'} className={'Header'}/>
                <Image src={loadingBoo} alt={'로딩부 이미지'} className={'loadingBoo'}/>
                <Link href={"/result/finalResult"} className={'loadingText'}>
                    <p>로딩중</p>
                </Link>
            </Container>
        </>
    )
}

export default LoadingComponent;
const Container=styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  .Header{
    position: absolute;
    right: 1rem;
    top: 1rem;

    z-index: 1;
  }
  .loadingBoo{
    margin-top:13.6rem;
  }
  .loadingText{
    margin-top: 7rem;
  }
`;