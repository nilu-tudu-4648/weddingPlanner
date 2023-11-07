// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSJdZJGCtT2qGSj2Lc7i3_GVJEvBIjXDo",
  authDomain: "weddingplanner-29c27.firebaseapp.com",
  projectId: "weddingplanner-29c27",
  storageBucket: "weddingplanner-29c27.appspot.com",
  messagingSenderId: "1076058128779",
  appId: "1:1076058128779:web:6cf2b7a86ad624b7492f8e",
  measurementId: "G-35XXZP9YE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
