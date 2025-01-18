// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8yL3mJK_3yjKWULC8cIkgm-bZ4i2NeXw",
  authDomain: "travel-ai-8c343.firebaseapp.com",
  projectId: "travel-ai-8c343",
  storageBucket: "travel-ai-8c343.firebasestorage.app",
  messagingSenderId: "496263115261",
  appId: "1:496263115261:web:e6c61789b32a463982a994",
  measurementId: "G-E2DGTYV7ZB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);