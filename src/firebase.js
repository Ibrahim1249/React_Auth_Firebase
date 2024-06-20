import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA2422fJM_Qv38g5LM9iWmyTHwxPyGTJOQ",
    authDomain: "geekster-ecommerce-e3dcf.firebaseapp.com",
    projectId: "geekster-ecommerce-e3dcf",
    storageBucket: "geekster-ecommerce-e3dcf.appspot.com",
    messagingSenderId: "131398585778",
    appId: "1:131398585778:web:af6e81b7193b7ac3dfa8ab"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
