import React from "react";
import styled from "@emotion/styled";

//어떤게 더 편할지 몰라서 요렇게 남겨놓슴다.. 필요 없으면 삭제하세용
function CategoryBtns(){

    return(
        <>
            <Container>
                <LightBtn type={'button'}></LightBtn>
                <DarkBtn type={'button'}></DarkBtn>
            </Container>
        </>
    )
}

export default CategoryBtns;
const Container=styled.div``;
const LightBtn=styled.button`
  width: 8.5625rem;
  height: 3.75rem;
  flex-shrink: 0;

  border: none;
  outline: none;
  border-radius: 1.25rem;
  background: #9EE2F0;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);

  color: #2F5B79;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const DarkBtn=styled.button`
  width: 8.5625rem;
  height: 3.75rem;
  flex-shrink: 0;

  border: none;
  outline: none;
  border-radius: 1.25rem;
  background: #2F5B79;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);

  color: #9EE2F0;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;