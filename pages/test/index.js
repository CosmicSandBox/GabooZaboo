import React from "react";
import Link from "next/link";

function Testpage () {
    return (
    <>
        <h1>여행 추천 질문</h1>
        <Link href={'/result'}>
            <button>결과페이지이동</button>
        </Link>
        <Link href={'/introduce'}>
            <button>뒤로가기</button>
        </Link>
    </>
    );
  }
  
  export default Testpage;