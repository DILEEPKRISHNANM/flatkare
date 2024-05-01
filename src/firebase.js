// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDqURA2OdpEjPlkemq2W_Y6Nt2N-ScA8M",
  authDomain: "apartments-e3b02.firebaseapp.com",
  databaseURL: "https://apartments-e3b02-default-rtdb.firebaseio.com",
  projectId: "apartments-e3b02",
  storageBucket: "apartments-e3b02.appspot.com",
  messagingSenderId: "113153744666",
  appId: "1:113153744666:web:b178f7394f7f6a067796a3",
  measurementId: "G-D8NTTG9NMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);