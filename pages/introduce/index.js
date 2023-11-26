import React from "react";
import Link from "next/link";


function IntroducePage () {
    return (
    <>
        <h1>소개 페이지 </h1>
        <Link href={'/test'}>
            <button>테스트하러가기</button>
        </Link>
        <Link href={'/home'}>
            <button>뒤로가기</button>
        </Link>
    </>
    );
  }

  export default IntroducePage;