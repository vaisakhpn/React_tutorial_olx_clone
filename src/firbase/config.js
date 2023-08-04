import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAODvCpp2qUNF2eEbxaKVGUJM_ElpS9si4",
    authDomain: "olx-demo-c47a2.firebaseapp.com",
    projectId: "olx-demo-c47a2",
    storageBucket: "olx-demo-c47a2.appspot.com",
    messagingSenderId: "928448531953",
    appId: "1:928448531953:web:4ccb8b6fe39628ad67c850",
    measurementId: "G-XY4C4BX88C"
  };
  
export default firebase.initializeApp(firebaseConfig)