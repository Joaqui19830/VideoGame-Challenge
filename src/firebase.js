import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBGUED0XAuh-nh465qwrtVW9qIfkC_Jjas",
  authDomain: "uploadingfile-23b6f.firebaseapp.com",
  projectId: "uploadingfile-23b6f",
  storageBucket: "uploadingfile-23b6f.appspot.com",
  messagingSenderId: "542205715351",
  appId: "1:542205715351:web:64a65a91bac9410a8e1ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)