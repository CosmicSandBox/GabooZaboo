import React, {useEffect, useState} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";

function FinalResultBtn(){

    return(
        <>
            //출국하기 버튼
            <DepartureBtn type={"button"}>
                🛫 출국하기
            </DepartureBtn>
        </>
    )
}
export default FinalResultBtn;

const DepartureBtn=styled.button`
  width: 9.5625rem;
  height: 2.3125rem;
  flex-shrink: 0;

  margin-top: 1.25rem;
  border-radius: 1.25rem;
  background: #b5d5e9;

  border: none;
  outline: none;

  color: #2f5b79;
  font-weight: 500;

  &:hover {
    font-weight: bold;
  }
`;