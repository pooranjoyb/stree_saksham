import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQMOjA_yikWThIzm17bUwCHzeSeaK2_to",
  authDomain: "stree-saksham.firebaseapp.com",
  projectId: "stree-saksham",
  storageBucket: "stree-saksham.appspot.com",
  messagingSenderId: "424919628410",
  appId: "1:424919628410:web:64e9574ae78c3eb9d559c3",
  measurementId: "G-X2XP5PS00Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
