import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLW1D6L63QERstR2mn5JHi7YAFDNc4dCk",
  authDomain: "vue-fire-auth-pr.firebaseapp.com",
  projectId: "vue-fire-auth-pr",
  storageBucket: "vue-fire-auth-pr.appspot.com",
  messagingSenderId: "754610346416",
  appId: "1:754610346416:web:40003a428d5a91e73fde75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
