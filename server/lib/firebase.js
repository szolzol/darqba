import { initializeApp, getApps, getApp } from "firebase/app";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAuBLiMU_gBTIReCTFnYkpOyA0EfjOqOgI",
  authDomain: "darqba-b5273.firebaseapp.com",
  projectId: "darqba-b5273",
  storageBucket: "darqba-b5273.appspot.com",
  messagingSenderId: "170640110079",
  appId: "1:170640110079:web:0d72b4e2cf04e2d69bb7ca",
  measurementId: "G-9RYV7H2JPG",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export { db };
