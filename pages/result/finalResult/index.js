import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import FinalResultImg from "@/component/finalResultImg";
import html2canvas from "html2canvas"; // html2canvas import 하기

import { GrPowerReset } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import { RiMenuAddLine } from "react-icons/ri";
import { LuShare2 } from "react-icons/lu";
import { getCollectionAll, ResetField } from "../../../firebase/fbase";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import FinalResultBtn from "@/component/finalResultBtn";

// export const deleteField = async (collectionName,documentId,fieldName)=>{

function FinalResult() {
    const [users, setUsers] = useState([]);
    const containerRef = useRef(null);
    const getUsers = async () => {
        const data = await getCollectionAll("user");
        setUsers(data);
    };
    useEffect(() => {
        getUsers();
    }, []);

    const reset = () => {
        ResetField("user", "user");
        getUsers();
    };

    //html2canvas 작동부분
    const downloadCapture = async () => {
        if (containerRef.current) {
            try {
                const canvas = await html2canvas(containerRef.current);
                const dataUrl = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "capture.png";
                link.click();
            } catch (error) {
                console.error("Error capturing the element:", error);
            }
        }
    };

    const currentUrl = window.location.href;

    return (
        <>
            <Container ref={containerRef}>
                {users.map((item, index) => (
                    <FinalResultImg
                        name={item.name}
                        mbti={item.mbti
                            .map((value) => value.toString())
                            .join("")}
                    />
                ))}
                {/*출국하기 스카이스캐너*/}
                <FinalResultBtn />
                <ResultBtns>
                    <Btns type={"button"} onClick={reset}>
                        <Link href={"/"}>
                            <GrPowerReset />
                            <p>다시하기</p>
                        </Link>
                    </Btns>
                    <Btns type={"button"} onClick={downloadCapture}>
                        <HiDownload />
                        <p>저장</p>
                    </Btns>
                    <Btns type={"button"}>
                        <Link href={"/category"}>
                            <RiMenuAddLine />
                            <p>다른 결과 보러가기</p>
                        </Link>
                    </Btns>
                    {/*<Link href={'/result/secondResult'}>*/}
                    {/*    <button type={"button"}>뒤로가기</button>*/}
                    {/*</Link>*/}
                    <CopyToClipboard text={currentUrl}>
                        <Btns type={"button"}>
                            <LuShare2 />
                            <p>공유하기</p>
                        </Btns>
                    </CopyToClipboard>
                </ResultBtns>
            </Container>
        </>
    );
}
const Container = styled.div`
    
`;
const ResultBtns = styled.div`
    position: absolute;
    left: 2rem;
    bottom: 1.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    outline: none;
    border: none;
`;

const Btns = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    margin: 1rem;

    background-color: transparent;
    color: #2f5b79;
    text-align: center;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    outline: none;
    border: none;

    p {
        margin-top: 0.5rem;
    }

    &:hover {
        font-weight: bold;
    }
`;

export default FinalResult;
