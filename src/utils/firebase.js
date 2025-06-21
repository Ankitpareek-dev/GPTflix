// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW4-MdWAbOcH6rEWjBzJ8MRyVDzQMJulc",
  authDomain: "netflixgpt-ac554.firebaseapp.com",
  projectId: "netflixgpt-ac554",
  storageBucket: "netflixgpt-ac554.firebasestorage.app",
  messagingSenderId: "650119220392",
  appId: "1:650119220392:web:1ee395cc6a28bf72a6469d",
  measurementId: "G-2G6DVM8BXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
