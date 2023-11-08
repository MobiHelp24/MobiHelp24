// src/api/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCi0T7Rcp_EuvS4a5aa49fTXxm20LH90rI",
  authDomain: "mobihelp24-8dee4.firebaseapp.com",
  projectId: "mobihelp24-8dee4",
  storageBucket: "mobihelp24-8dee4.appspot.com",
  messagingSenderId: "56392533480",
  appId: "1:56392533480:web:06c38fadf085de3f0d905d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
