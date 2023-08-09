import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/app";

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

let app;

if (!firebase.getApps().length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  app = firebase.getApp();
}
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
