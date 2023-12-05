import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

function CtgLightBtn({mbti}){

    return(
        <>
            <Link href={`/result/anotherResult/${mbti}`}>
                <LightBtn type={'button'}>
                    <p>{mbti}</p>
                </LightBtn>
            </Link>
        </>
    )
}


export default CtgLightBtn;
const LightBtn=styled.button`
  width: 8.5625rem;
  height: 3.75rem;
  flex-shrink: 0;

  margin: 0.7rem;
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