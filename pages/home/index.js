import React, {useState} from "react";
import Link from "next/link";

import styled from '@emotion/styled';
import Image from "next/image";
import GBJB from "@/img/GBJB.png";
import Home from "@/img/home.png"


function HomePage() {
    return (
        <>
            <Container>
                <Image src={GBJB} alt={"GBJB헤더"} className={"Header"}/>
                <NicknameInput>
                    <input
                        className={'HomeInput'}
                        maxLength={5}
                        // onChange={(e)=>setUserName(e.target.value)}
                        placeholder={'한글 5글자 이내!!'}
                    />
                </NicknameInput>
                <HomeBtn>
                    <Link href={"/introduce"}>
                        <button
                            type={"button"}
                            // onClick={handleInput}
                        >
                            🦉 시작해보자Boo!!
                        </button>
                    </Link>
                </HomeBtn>
                <HomeChangeLanguage>
                    <p>한국어 / 영어</p>
                </HomeChangeLanguage>
                <Image src={Home} className={"HomeImg"}/>
            </Container>
        </>
    );
}
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
  .HomeImg{
    z-index: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const NicknameInput=styled.div`
  display: flex;
  text-align: right;
  width: 18.75rem;
  height: 3.125rem;
  flex-shrink: 0;
  
  margin-top: 39.6rem;
  padding-left: 4.5rem;
  
  border-radius: 3.125rem;
  //background: #F0F0F0;
  background: transparent;

  z-index: 1;

  .HomeInput {
    background-color: transparent;
    border: none;
    outline: none;
    width: max-content;

    color: #4D5A62;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const HomeBtn=styled.div`
  margin-top: 2rem;
  padding-top: 0.9rem;
  text-align: center;
  align-items: center;
  
  width: 18.75rem;
  height: 3.125rem;
  flex-shrink: 0;

  border-radius: 3.125rem;
  background: #0095B5;

  z-index: 1;

  button{
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    &:hover {
      font-weight: bold;
    }
  }
`;

const HomeChangeLanguage=styled.div`
  color: black;
  z-index: 1;
  margin-top: 1rem;
`;
export default HomePage;