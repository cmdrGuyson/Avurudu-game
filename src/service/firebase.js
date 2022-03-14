import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import config from "./config.json";

// Initialize Firebase

initializeApp(config);
const auth = getAuth();
const firestore = getFirestore();

class Firebase {
  static async login(email, password) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  }

  static async logout() {
    await signOut(auth);
  }
}

export default Firebase;
