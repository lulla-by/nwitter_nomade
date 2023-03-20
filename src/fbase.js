import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//사용하고자 하는 것은 반드시 import시킨다
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
  projectId:process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_MESSAGIN_ID,
  measurementId: process.env.REACT_APP_APP_ID
};
const app = initializeApp(firebaseConfig);
export const authService = getAuth();