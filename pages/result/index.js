import React, {useEffect, useState} from "react";
import Link from "next/link";
import FirstResultImg from "@/component/firstResultImg";
import styled from "@emotion/styled";

import GBJB from "@/img/GBJB.png";
import Image from "next/image";
import {getCollectionAll} from "../../firebase/fbase";
import {useRouter} from "next/router";

function Result () {

    const [users, setUsers] = useState([]);
    // export const getDocument = async (collectionName, documentId) => {
    const getUsers = async () => {
        const data = await getCollectionAll("user");
        setUsers(data);
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
    <>
        {users.map((item, index)=>(
            <Container key={index}>
                <Image src={GBJB} alt={"GBJB헤더"} className={"Header"}/>
                <FirstResultImg name={item.name} mbti={item.mbti.map((value) => value.toString()).join("")}/>
                {/*<Test />*/}
                <Link href={`/result/secondResult/${item.mbti.map((value) => value.toString()).join("")}`}>
                    <FirstResultBtn>
                        <p>다음</p>
                    </FirstResultBtn>
                </Link>
            </Container>
        ))}

    </>
    );
  }

  export default Result;


const Container=styled.div`
  display: flex;
  flex-direction: column;

  .Header{
    position: absolute;
    right: 1rem;
    top: 1rem;

    z-index: 1;
  }
`;
const FirstResultBtn=styled.button`
  width: 18.75rem;
  height: 3.125rem;
  flex-shrink: 0;
  
  margin-top: 3rem;
  //position: absolute;
  //bottom: 5rem;
  left: 2.75rem;

  border-radius: 3.125rem;
  background: #F0F0F0;
  border: none;
  outline: none;

  position: absolute;
  bottom: 3rem;

  &:hover{
    font-weight: bold;
    color: white;
    background-color: #0095B5;
  }
`;