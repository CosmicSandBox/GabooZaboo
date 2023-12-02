import React from "react";
import Link from "next/link";
import styled from '@emotion/styled';


function HomePage() {

  return (
    <>
        <Container>
            <h1>홈페이지</h1>
            <div
                className={'InputDiv'}
            >
                <input
                    className={'HomeInput'}
                />
            </div>
            <Link href={"/introduce"}>
                <HomeBtn
                    type={"button"}>
                    다음 단계로 이동
                </HomeBtn>
            </Link>
            <HomeChangeLanguage>
                <p>한국어 / 영어</p>
            </HomeChangeLanguage>
        </Container>
    </>
  );
}
const Container=styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  .InputDiv{
    background-color: green;
    padding: 0.5rem;
    .HomeInput{
      background-color: transparent;
      border: none;
      outline: none;
    }
  }

`;
const HomeBtn=styled.div`
  padding-top: 0.7rem;
  text-align: center;
  align-items: center;
  
  width: 18.75rem;
  height: 3.125rem;
  flex-shrink: 0;

  border-radius: 3.125rem;
  background: #0095B5;
  color: white;

  &:hover {
    font-weight: bold;
    background-color: #0095B5;
  }
`;
const HomeChangeLanguage=styled.div`
  color: black;
`;
export default HomePage;
