
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjafinYIn0u_Z8fxlzMQJro2tK6MPE6bg",
  authDomain: "ecommerceguaglianone.firebaseapp.com",
  projectId: "ecommerceguaglianone",
  storageBucket: "ecommerceguaglianone.appspot.com",
  messagingSenderId: "819384640293",
  appId: "1:819384640293:web:740df6fe0e70618e21f0cc"
};

const app = initializeApp(firebaseConfig);

export const iniciarFirebase = () => app
