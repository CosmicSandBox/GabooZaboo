import React from "react";
import Link from "next/link";
import Memo from "../img/memo.png";
import Image from "next/image";

function IntroducePage () {
    return (
    <>
        <h1>소개 페이지 </h1>
        <Image src={Memo}/>
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