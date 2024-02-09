import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAmsrlFy8hvBscIfXhLGZKzvwgdRdIlUSE",
    authDomain: "pokeapi-84cf9.firebaseapp.com",
    projectId: "pokeapi-84cf9",
    storageBucket: "pokeapi-84cf9.appspot.com",
    messagingSenderId: "620051902723",
    appId: "1:620051902723:web:bd778e805d722abe787936"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export default auth;