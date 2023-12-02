import React from "react";
import Index from "./firstResult";
import Link from "next/link";
import FirstResult from "./firstResult";

import File from "../img/file.png";
function Result () {
    return (
    <>
        <FirstResult/>
        <Link href={'/result/secondResult'}>
            <button>2번쨰 결과</button>
        </Link>
    </>
    );
  }

  export default Result;