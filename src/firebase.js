import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJk3UcA4acGiRCmAavfhFk7lw_xSTBpTE",
  authDomain: "netflix-deni.firebaseapp.com",
  projectId: "netflix-deni",
  storageBucket: "netflix-deni.appspot.com",
  messagingSenderId: "629723640503",
  appId: "1:629723640503:web:f122c0f98c0b1bb4be1332",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
