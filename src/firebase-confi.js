import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBr_U3oC1zp1J2MmpFOaUlzxfVfZ37eGAs",
    authDomain: "servidorweb-bc41e.firebaseapp.com",
    projectId: "servidorweb-bc41e",
    storageBucket: "servidorweb-bc41e.appspot.com",
    messagingSenderId: "773242688871",
    appId: "1:773242688871:web:a164083da880dc9538cbc2",
    measurementId: "G-74L710JNZN"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);