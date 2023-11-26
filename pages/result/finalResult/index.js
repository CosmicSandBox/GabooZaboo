import React from "react";
import Link from "next/link";

function FinalResult () {
    return (
    <>
        <h1> 최종 결과 확인</h1>
        <Link href={'/result/secondResult'}>
            <button>뒤로가기</button>
        </Link>
        <Link href={'/category'}>
            <button>다른결과 보러가기</button>
        </Link>
    </>
    );
  }

  export default FinalResult;