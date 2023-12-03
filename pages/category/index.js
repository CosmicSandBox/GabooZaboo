import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import CategoryBtns from "../../component/categoryBtns";
import CtgLightBtn from "../../component/ctgLightBtn";
import CtgDarkBtn from "../../component/ctgDarkBtn";

import GBJB from "../img/GBJB.png";
import Link from "next/link";

function CategoryPage () {
    return (
    <>
        <Container>
            <Image src={GBJB} alt={'GBJB헤더'} className={'Header'}/>
            <BtnsDiv>
                <IsDiv>
                    <CtgLightBtn>
                        {/*link로 연결하심 됩니당*/}
                        {/*<Link href={}/>*/}
                    </CtgLightBtn>
                    <CtgLightBtn>
                        {/*<Link href={}/>*/}
                    </CtgLightBtn>
                    <CtgLightBtn>
                        {/*<Link href={}/>*/}
                    </CtgLightBtn>
                    <CtgLightBtn>
                        {/*<Link href={}/>*/}
                    </CtgLightBtn>
                </IsDiv>
                <EsDiv>
                    <CtgDarkBtn>
                        {/*link로 연결하심 됩니당*/}
                        {/*<Link href={}/>*/}
                    </CtgDarkBtn>
                    <CtgDarkBtn>
                        {/*<Link href={}/>*/}
                    </CtgDarkBtn>
                    <CtgDarkBtn>
                        {/*<Link href={}/>*/}
                    </CtgDarkBtn>
                    <CtgDarkBtn>
                        {/*<Link href={}/>*/}
                    </CtgDarkBtn>
                </EsDiv>
                <InDiv>
                    <CtgLightBtn>
                        {/*<Link href={}/>*/}
                    </CtgLightBtn>
                    <CtgLightBtn>
                        {/*<Link href={}/>*/}
                    </CtgLightBtn>
                    <CtgLightBtn>
                        {/*<Link href={}/>*/}
                    </CtgLightBtn>
                    <CtgLightBtn>
                        {/*<Link href={}/>*/}
                    </CtgLightBtn>
                </InDiv>
                <EnDiv>
                    <CtgDarkBtn>
                        {/*<Link href={}/>*/}
                    </CtgDarkBtn>
                    <CtgDarkBtn>
                        {/*<Link href={}/>*/}
                    </CtgDarkBtn>
                    <CtgDarkBtn>
                        {/*<Link href={}/>*/}
                    </CtgDarkBtn>
                    <CtgDarkBtn>
                        {/*<Link href={}/>*/}
                    </CtgDarkBtn>
                </EnDiv>
            </BtnsDiv>
            <ReturnFinalBtn type={'button'}>
                <Link href={"./result/finalResult"}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="45" height="45"
                         viewBox="0 0 45 45"
                         fill="none">
                        <circle
                            cx="22.5" cy="22.5"
                            r="22.5"
                            fill="#5CC0D6"/>
                        <path d="M17.7514 12C18.4595 12 19.1148 12.3744 19.4743 12.9843L22.9124 18.8164H23.0681L26.525 12.9807C26.8851 12.3728 27.5392 12 28.2458 12H28.3068C29.8667 12 30.8261 13.7063 30.0156 15.0392L25.7827 22L30.1 28.944C30.9283 30.2763 29.9703 32 28.4015 32H28.2883C27.5851 32 26.9335 31.6307 26.5723 31.0273L23.0681 25.1738H22.9124L19.4083 31.0273C19.047 31.6307 18.3955 32 17.6923 32H17.6044C16.0344 32 15.0766 30.2738 15.9074 28.9416L20.2368 22L15.9797 15.044C15.1641 13.7113 16.1231 12 17.6856 12H17.7514Z"
                              fill="white"/>
                    </svg>
                </Link>
            </ReturnFinalBtn>
        </Container>
    </>
    );
  }
const Container=styled.div`
  .Header{
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;
const BtnsDiv=styled.div`
  margin-top: 5rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const IsDiv=styled.div``;
const EsDiv=styled.div``;
const InDiv=styled.div``;
const EnDiv=styled.div``;
const ReturnFinalBtn=styled.button`
  //position: absolute;
  //bottom: 4rem;
  margin-top:1.5rem;
  background-color: transparent;
  border: none;
  outline: none;
`;
export default CategoryPage;