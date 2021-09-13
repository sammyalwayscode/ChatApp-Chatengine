import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCjKlAMz5H_Xt6sx28dDvekruUmv5IwD2w",
    authDomain: "chatbdcl.firebaseapp.com",
    projectId: "chatbdcl",
    storageBucket: "chatbdcl.appspot.com",
    messagingSenderId: "249594516728",
    appId: "1:249594516728:web:1775fd0a6425482fbd570d",
  })
  .auth();
