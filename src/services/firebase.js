import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAeXCsEfNrRbumijC_eZcdEJVIXt-Hf_Wg",
  authDomain: "ln-sublimacion-3a22c.firebaseapp.com",
  projectId: "ln-sublimacion-3a22c",
  storageBucket: "ln-sublimacion-3a22c.appspot.com",
  messagingSenderId: "562677991278",
  appId: "1:562677991278:web:3ffabd9ffdc2f62841237f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testApp(){
    console.log("conectandonos a firestore", db)
}