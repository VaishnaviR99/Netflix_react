import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCZN_fpaMpPgz_MLjqWvoQ50ywgDvKEKKc",
  authDomain: "react-netflix-clone-4f75c.firebaseapp.com",
  projectId: "react-netflix-clone-4f75c",
  storageBucket: "react-netflix-clone-4f75c.appspot.com",
  messagingSenderId: "363336592716",
  appId: "1:363336592716:web:c9a85ec2e007173a8f73e9",
  measurementId: "G-8BTY8FLRXQ"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
