import React, {useEffect, useState} from "react";
import {getCollectionAll} from "../../firebase/fbase";
import Hello from "./hello";
import Bye from "./bye";
import ResultTest from "./resultTest";
import TestFbase from "./testFbase";
import {flag_Img_list} from "@/component/flag_Img_list";
import ImgTest from "./ImgTest";

function Api () {
    const [data, setData] = useState([])
    const [showHello, setShowHello] = useState(true); // 새로운 상태 추가

    const getUser = async () => {
        const res = await getCollectionAll("user");
        setData(res);
        console.log("user_mbti",data)
    };

    const handleButtonClick = () => {
        // 버튼을 클릭하면 showHello 상태를 토글합니다.
        setShowHello(!showHello);
    };
    useEffect(() => {
        getUser()
    }, []);


    return (
        <>
            <h1>Api테스트</h1>
            {/*{data.map((item)=>(*/}
            {/*    <div>*/}
            {/*        <p>{item.name}</p>*/}
            {/*        <p>{item.mbti}</p>*/}
            {/*        <div>*/}
            {/*        </div>*/}
            {/*        /!*리스트에 있는 값 스트링으로 빼기*!/*/}
            {/*        <p>{item.mbti.map(value => value.toString()).join('')}</p>*/}
            {/*        {item.mbti.map(value => value.toString()).join('') === 'ISTJ' && (*/}
            {/*            <div>*/}
            {/*                Content to display when item.mbti is 'istj'*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*        /!*<Hello userMbti={item.mbti.map(value => value.toString()).join('')} userName={item.name}/>*!/*/}
            {/*        /!*<Bye userMbti={item.mbti.map(value => value.toString()).join('')} userName={item.name}/>*!/*/}
            {/*        {showHello ? (*/}
            {/*            <Hello*/}
            {/*                userMbti={item.mbti.map((value) => value.toString()).join("")}*/}
            {/*                userName={item.name} showComponent={showHello}*/}
            {/*            />*/}
            {/*        ) : (*/}
            {/*            <Bye*/}
            {/*                userMbti={item.mbti.map((value) => value.toString()).join("")}*/}
            {/*                userName={item.name}*/}
            {/*            />*/}
            {/*        )}*/}
            {/*        <div>*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*))}*/}
            {/*/!*{flag_Img_list.map(())}*!/*/}
            {/*<div>*/}

            {/*</div>*/}
            {/*<button  onClick={handleButtonClick} >누르면 영어만 보여주</button>*/}
            {/*<ResultTest/>*/}
            {/*<TestFbase/>*/}
            <ImgTest/>
        </>
    );
}

  
  export default Api;