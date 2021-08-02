var firebaseConfig = {
  apiKey: "AIzaSyC1n78m-6VDz0qLwauxOttXS9e5uCiAbkM",
  authDomain: "clone-two-3f2e1.firebaseapp.com",
  projectId: "clone-two-3f2e1",
  storageBucket: "clone-two-3f2e1.appspot.com",
  messagingSenderId: "257231266992",
  appId: "1:257231266992:web:ffee608000a578cb228775",
  measurementId: "G-KWSCDVBGQ5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

//This whole thing is firebase thing