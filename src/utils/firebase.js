import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZ7YAOq7iMGVSjpS-yk3WJwwq-aYkalgY",
  authDomain: "my-vet-web.firebaseapp.com",
  projectId: "my-vet-web",
  storageBucket: "my-vet-web.appspot.com",
  messagingSenderId: "374619890520",
  appId: "1:374619890520:web:0c49215125341944e0bb2d",
  measurementId: "G-3D5BXR8ZHD"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;

