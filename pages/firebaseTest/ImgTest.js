import React, { useEffect } from "react";
import { flag_Img_list } from "@/component/flag_Img_list";
import Image from "next/image";
import UserImage from "./UserImage";
import ENFJ from "@/img/flag/ENFJ_브라질.png"
import ENFP from "@/img/flag/ENFP_라오스.png"
import ENTJ from "@/img/flag/ENTJ_뉴질랜드.png"
function ImgTest() {
    const user = "ENFP"
    const imgList = [ENFJ, ENFP, ENTJ ];
    const tlqkf = imgList.map((value) => value.toString()).join("")
    const isMbtiInList = imgList.includes(user);
    console.log("isMbtiInList",tlqkf)

    return (
        <>
            <h1>이미지 테스트 중</h1>
            <Image src={ENFJ} />
            {/*{isMbtiInList && <Image src={`path/to/${Mbti}.png`} alt={Mbti} />}*/}
        </>
    );
}

export default ImgTest;
