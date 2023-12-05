import React, { useEffect, useState } from "react";
import { flag_Img_list } from "@/component/flag_Img_list";
import ENFJ from "@/img/flag/ENFJ_브라질.png";
import ENFP from "@/img/flag/ENFP_라오스.png";
import Image from "next/image"

function ImgTest() {
    const [data, setData] = useState([]);
    const [showHello, setShowHello] = useState(true);
    const user_mbti = "ENFJ"

    const matchingFlag = flag_Img_list.find((flag) => flag.name === user_mbti);

    if (matchingFlag) {
        // The matching flag object was found
        const { name, file } = matchingFlag;
        // Now you can use 'name' and 'file' as needed
        console.log(`Found matching flag for ${name}. File: ${file}`)
        console.log("file",file)
        const mbti_src = file
        console.log("mbti_src", typeof mbti_src)
        return mbti_src
    } else {
        // No matching flag object was found
        console.log(`No matching flag found for ${user_mbti}`);
    }

    // const getUser = async () => {
    //     const res = await getCollectionAll("user");
    //     setData(res);
    //     console.log("user_mbti", data);
    // };
    //
    // const handleButtonClick = () => {
    //     setShowHello(!showHello);
    // };
    //
    // useEffect(() => {
    //     getUser();
    // }, []);


    return (
        <>
            <h1>이미지 테스트 중</h1>
            {/*{data.map((item, index)=>(*/}
            {/*    <div key={index}>*/}
            {/*        <p>{item.name}</p>*/}
            {/*        <p>{item.mbti}</p>*/}
            {/*    </div>*/}
            {/*))}*/}

            <img src={ENFJ} alt={"name"}/>
            <img src={"/ENFP_라오스.png"} alt={"name"}/>

        </>
    );
}

export default ImgTest;
