import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy6q2SmrlxwK6DQDrGeLN4EIRA-cENPzs",
  authDomain: "gaboozaboo-b3bbc.firebaseapp.com",
  projectId: "gaboozaboo-b3bbc",
  storageBucket: "gaboozaboo-b3bbc.appspot.com",
  messagingSenderId: "320018472787",
  appId: "1:320018472787:web:b906c33a5c3d0b3c028ba6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
