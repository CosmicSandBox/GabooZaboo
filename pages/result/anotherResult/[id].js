import React from "react";
import styled from "@emotion/styled";
import FinalResultImg from "@/component/finalResultImg";
import Link from "next/link";
import { GrPowerReset } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import { RiMenuAddLine } from "react-icons/ri";
import { LuShare2 } from "react-icons/lu";
import AnotherResultImg from "@/component/anotherResults";
import { useRouter } from "next/router";

function anotherResult() {
    const router = useRouter();
    const category_mbti = router.query.id;
    console.log("category_mbti", category_mbti);

    return (
        <>
            <Container>
                <AnotherResultImg name={"BOO"} mbti={category_mbti} />
                <button type={"button"} className={"Departure"}>
                    🛫 출국하기
                </button>
                <ResultBtns>
                    <Btns type={"button"}>
                        <Link href={"/"}>
                            <GrPowerReset />
                            <p>다시하기</p>
                        </Link>
                    </Btns>
                    {/*<Btns type={"button"}>*/}
                    {/*    <HiDownload />*/}
                    {/*    <p>저장</p>*/}
                    {/*</Btns>*/}
                    <Btns type={"button"}>
                        <Link href={"/category"}>
                            <RiMenuAddLine />
                            <p>다른 결과 보러가기</p>
                        </Link>
                    </Btns>
                    {/*<Link href={'/result/secondResult'}>*/}
                    {/*    <button type={"button"}>뒤로가기</button>*/}
                    {/*</Link>*/}
                    {/*<Btns type={'button'}>*/}
                    {/*    <LuShare2 />*/}
                    {/*    <p>공유하기</p>*/}
                    {/*</Btns>*/}
                </ResultBtns>
            </Container>
        </>
    );
}

export default anotherResult;

const Container = styled.div`
    .Departure {
        width: 9.5625rem;
        height: 2.3125rem;
        flex-shrink: 0;

        margin-top: 1.25rem;
        border-radius: 1.25rem;
        background: #b5d5e9;

        border: none;
        outline: none;

        color: #2f5b79;
        font-weight: 500;

        &:hover {
            font-weight: bold;
        }
    }
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
