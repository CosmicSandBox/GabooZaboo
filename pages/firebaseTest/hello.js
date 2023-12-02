import React, {useEffect, useState} from "react";
import {getCollectionAll, useQuery} from "../../firebase/fbase";
import {collection, getDocs, query, where} from "firebase/firestore";


function Hello ({userMbti, userName, showComponent}) {
  const [data, setData] = useState([])
  const [qdata, setQdata] = useState([])

  const getData = async () => {
    const res = await getCollectionAll("mbti_feature");
    setData(res);
  };

  // const getQuery = async () =>{
  //   const data = await useQuery('mbti_feature','mbti',{userMbti})
  //   setQdata(data)
  //   console.log("qdata",qdata)
  // }

  useEffect(() => {
    getData()
  }, []);
  if (!showComponent) {
    return null;
  }
    return (
    <>
      <h1>여기는 hello.js</h1>
      <h1>Hello user</h1>
      <p>이름:{userName}</p>
      <p>mbti:{userMbti}</p>
      {/*{qdata.map((i)=>(*/}
      {/*    <div>*/}
      {/*      <p>{i.desc}</p>*/}
      {/*    </div>*/}
      {/*))}*/}
          {/*{data.map((item)=>(*/}
          {/*      <div>*/}
          {/*        {item.istj.mbti === userMbti&&  (*/}
          {/*            <div>*/}
          {/*              <p>{item.istj.airport}</p>*/}
          {/*              {item.istj.location.map((l,index)=>(*/}
          {/*                  <div key={index}>{l}</div>*/}
          {/*              ))}*/}
          {/*            </div>*/}
          {/*        )}*/}
          {/*      </div>*/}
          {/*  ))}*/}
    </>
    );
  }

  export default Hello;