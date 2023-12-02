import React from "react";

function Bye ({userMbti,userName}) {

    return (
    <>
        <h1>여기는 bye.js</h1>

        <h1>mbti 결과</h1>
        <p>NAME: {userName}</p>
        <p>MBTI: {userMbti}</p>

    </>
    );
  }

  export default Bye;