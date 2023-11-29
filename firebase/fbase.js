import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./index";


// 읽기
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

// 문서 추가
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
