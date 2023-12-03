import React from "react";
import styled from "@emotion/styled";

function CtgDarkBtn(){

    return(
        <>
            <DarkBtn>
                <p>whwehlTek</p>
            </DarkBtn>
        </>
    )
}

const DarkBtn=styled.button`
  width: 8.5625rem;
  height: 3.75rem;
  flex-shrink: 0;

  margin: 0.7rem;
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

export default CtgDarkBtn;
