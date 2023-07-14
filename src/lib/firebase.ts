import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

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


/**
 * @returns a store with the current firebase user
 */
function userStore() {
    let unsubscribe: () => void;
  
    if (!auth || !globalThis.window) {
      console.warn('Auth is not initialized or not in browser');
      const { subscribe } = writable<User | null>(null)
      return {
        subscribe,
      }
    }

    const { subscribe } = writable(auth?.currentUser, (set) => {
      unsubscribe = onAuthStateChanged(auth, (user) => {
        set(user)
      })

      return () => unsubscribe()
    })
  
    return {
      subscribe,
    };
  }
  
  export const user = userStore();