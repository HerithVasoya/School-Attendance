import firebase from "firebase"
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCoxCvaLDHCUJcgryWf0-7HBQ-aonZy1gU",
    authDomain: "register-11704.firebaseapp.com",
    databaseURL: "https://register-11704-default-rtdb.firebaseio.com",
    projectId: "register-11704",
    storageBucket: "register-11704.appspot.com",
    messagingSenderId: "914503224217",
    appId: "1:914503224217:web:43500e74a3a5cc1b36a108",
  }

  firebase.initializeApp(firebaseConfig)


export default firebase.database()