import React from "react";
import Link from "next/link";

function FirstResult () {
    return (
    <>
        <h1>결과 페이지 1 - 나라 추천 </h1>
        <Link href={'/result'}>
            <button>뒤로가기</button>
        </Link>
    </>
    );
  }
  
  export default FirstResult;