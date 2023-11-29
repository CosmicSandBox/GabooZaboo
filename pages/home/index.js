import React from "react";
import Link from "next/link";
import TestFbase from "./testFbase";
import ResultTest from "./resultTest";

function HomePage() {
  return (
    <>
      <h1>홈페이지</h1>
      <Link href={"/introduce"}>
        <button>소개 페이지 이동</button>
      </Link>
      <TestFbase />
        <ResultTest/>
    </>
  );
}

export default HomePage;
