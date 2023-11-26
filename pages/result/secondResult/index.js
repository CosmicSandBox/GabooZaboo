import React from "react";
import Link from "next/link";

function SecondResult () {
    return (
    <>
        <h1>두번째 결과</h1>
        <Link href={'/result/finalResult'}>
            <button>최종결과 ㄱ </button>
        </Link>
        <Link href={'/result/firstResult'}>
            <button>뒤로가기</button>
        </Link>
    </>
    );
  }

  export default SecondResult;