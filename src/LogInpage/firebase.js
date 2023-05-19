import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore"
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAU7_6XyjHHCNHzMiUBerqNTekKrBTNFZ8",
    authDomain: "text-braille-converter.firebaseapp.com",
    projectId: "text-braille-converter",
    storageBucket: "text-braille-converter.appspot.com",
    messagingSenderId: "985177072287",
    appId: "1:985177072287:web:8deea33b9d51faccdbb8aa",
    measurementId: "G-P704TJ7W6G"
  };
    
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
const auth=getAuth();
export {app,auth};