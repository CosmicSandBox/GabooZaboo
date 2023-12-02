import {
  doc,
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  setDoc,
  arrayUnion,
  arrayRemove,
  deleteField,
  query,
  where,
} from "firebase/firestore";
import { db } from "./index";


//전체 문서 가져오기
export const getCollectionAll = async (collectionName) => {
  let data = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    console.log("@@doc", doc);
    const docData = doc.data();
    console.log(("doc.data", docData));
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

// 문서 한개 가져오기


export const getDocument = async (collectionName, documentId) => {
  const docSnap = await getDoc(doc(db, collectionName, documentId));
  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
};

// 문서 추가 - 말그대로 문서 추가됨
export const addDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    created_at: serverTimestamp(),
  });
  return docRef;
};

// 문서 삭제
export const deleteDocument = async (collectionName, documentId) => {
  await deleteDoc(doc(db, collectionName, documentId));
};

// 문서 수정
export const updateDocument = async (collectionName, documentId, data) => {
  await updateDoc(doc(db, collectionName, documentId), {
    ...data,
    updated_at: serverTimestamp(),
  });
};

// 문서 덮어쓰기

// Add a new document in collection "cities"
export const overwrightDocument = async (collectionName, documentId, data) =>{
  await setDoc(doc(db, collectionName, documentId), {
    ...data,
    updated_at: serverTimestamp(),
  });
}

// 배열 업데이트
export const updateArray = async (collectionName, documentId, fieldName,element) =>{
  fieldName  = doc(db, collectionName, documentId);
// Atomically add a new region to the "regions" array field.
  await updateDoc(fieldName, {
   mbti: arrayUnion(element)
  });
}

//내가 원하는 필드에 값 추가 - 수정
export const  updateField = async (collectionName, documentId ,fieldName,element) =>{
  fieldName = doc(db, collectionName, documentId);
  await updateDoc(fieldName, {
    name:arrayUnion(element),
  })
}


//쿼리사용
// export const useQuery = async (collectionName, fieldName, find) => {
//   const queryC = collection(db, collectionName);
//   const q = query(queryC, where(fieldName, '==', find));
//   const querySnapshot = await getDocs(q);
//   let userMbti;
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, ' => ', doc.data(),"이게머야");
//     userMbti = doc(db, collectionName, 'user_mbti');
//     addDocument(collectionName, {
//       ...doc.data(),
//     });
//   });
//   console.log("@@@@@@userMbti",userMbti)
//   return userMbti
//
// };

// export const useQuery = async (collectionName,fieldName,find) =>{
//   const queryC = collection(db, collectionName);
//   const q = query(queryC, where(fieldName, "==", find));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//     let user_mbti = doc(db, collectionName, 'user_mbti');
//     setDoc(user_mbti, {
//       ...doc.data(), });
//   });
//   return(
//       user_mbti
//   )
//
// }

