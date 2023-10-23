// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYrMx0cJd-wXYvLPod8gFs5oURJWShjB8",
  authDomain: "sabjiiwala-86477.firebaseapp.com",
  projectId: "sabjiiwala-86477",
  storageBucket: "sabjiiwala-86477.appspot.com",
  messagingSenderId: "141662332260",
  appId: "1:141662332260:web:fd26ff72c658c64cc20671",
  measurementId: "G-S24PM4NJB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);