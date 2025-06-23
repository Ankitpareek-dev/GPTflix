import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCezJIre4dAzhFhUH5Ne0jQXg22eurdXNo",
  authDomain: "gptflix-fa10e.firebaseapp.com",
  projectId: "gptflix-fa10e",
  storageBucket: "gptflix-fa10e.firebasestorage.app",
  messagingSenderId: "511274828696",
  appId: "1:511274828696:web:a116bf7f69aa71856e21ed",
  measurementId: "G-05W5JVEJZX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
