// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8EvzICFFFa7hGP5w_AsiXrJyOPhipsDI",
  authDomain: "bedtime-stories-e56b4.firebaseapp.com",
  projectId: "bedtime-stories-e56b4",
  storageBucket: "bedtime-stories-e56b4.appspot.com",
  messagingSenderId: "427829869375",
  appId: "1:427829869375:web:d40e4aede1781aab68318a",
  measurementId: "G-8X5DEJVNPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//export default firebase.firestore();
