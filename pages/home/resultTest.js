import React, {useEffect, useState} from "react";
import {addDocument, getCollectionAll} from "../../firebase/fbase";

function ResultTest () {
    const [result, setResult]= useState([])

    const [answer1, setAnswer1] = useState([]);
    const [answer2, setAnswer2] = useState([]);

    // Function to handle button clicks
    const handleButtonClick = (value) => {
        if (value === 'E') {
            setAnswer1((prevAnswer1) => [...prevAnswer1, value]);
        } else if (value === 'I') {
            setAnswer2((prevAnswer2) => [...prevAnswer2, value]);
        } else {
            console.error('Invalid button value');
        }
    };
    const getUsers = async () => {
        const data = await getCollectionAll("answer");
        setResult(data);
    };
    useEffect(() => {
        getUsers();
    }, []);



    return (
    <>
        <h1>버튼누르면 api에 값 넣고 결과 도출하기 </h1>
        {result.map((item, index)=>(
            <div key={index}>
                <p>
                    answerList1:{item.answer1}
                </p>
                <p>
                    answerList2:{item.answer2}
                </p>
            </div>
        ))}
        <div>
            {/* Button for "E" */}
            <form>

            </form>
            <button onClick={() => handleButtonClick('E')}>Button E</button>

            {/* Button for "I" */}
            <button onClick={() => handleButtonClick('I')}>Button I</button>

            {/* Display the lengths of answer1 and answer2 */}
            <p>Length of answer1: {answer1.length}</p>
            <p>Length of answer2: {answer2.length}</p>

        </div>
    </>
    );
  }

  export default ResultTest;