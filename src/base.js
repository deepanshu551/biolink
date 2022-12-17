import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyBgwQQyhJdsuPVBV1p-B3qNBmFWrjmIjTA",
    authDomain: "link-app-84587.firebaseapp.com",
    projectId: "link-app-84587",
    storageBucket: "link-app-84587.appspot.com",
    messagingSenderId: "666435476322",
    appId: "1:666435476322:web:45a7b60b8bd1c82b83ea3b",
    measurementId: "G-MJGQYS87J1"
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export { app, auth, db };