import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAiNQ1MntNCA79rEhJCvQKl4JV-sqUQw7Q",
    authDomain: "elmer-site.firebaseapp.com",
    projectId: "elmer-site",
    storageBucket: "elmer-site.appspot.com",
    messagingSenderId: "995427603745",
    appId: "1:995427603745:web:5270cb75bdcae77c775a60"
  };

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)