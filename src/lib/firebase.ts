import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBaJByoQAx6FzGY59UadnYMh3DTVXE5rZU",
    authDomain: "svelte-linkshare.firebaseapp.com",
    projectId: "svelte-linkshare",
    storageBucket: "svelte-linkshare.appspot.com",
    messagingSenderId: "141425063632",
    appId: "1:141425063632:web:952c1ffaaf076d7d97d0d5",
    measurementId: "G-75XJV752PT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
