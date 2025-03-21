import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBX-TG1URTJaoUSMmWC6b3d9tQ2Vm37MDs",
  authDomain: "spendwise-34eda.firebaseapp.com",
  projectId: "spendwise-34eda",
  storageBucket: "spendwise-34eda.firebasestorage.app",
  messagingSenderId: "670096687948",
  appId: "1:670096687948:web:55f878fe1c8b9e793a45e9",
  measurementId: "G-FZT3P29VS1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};

export { auth, app };