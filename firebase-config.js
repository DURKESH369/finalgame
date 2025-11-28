// Firebase Configuration
// Replace these values with your actual Firebase project credentials
// Get them from: Firebase Console > Project Settings > General > Your apps


// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7Svkhw-RLJQ57WafS4AeBh48UpMZphAo",
    authDomain: "game-e4486.firebaseapp.com",
    projectId: "game-e4486",
    storageBucket: "game-e4486.firebasestorage.app",
    messagingSenderId: "1069440824346",
    appId: "1:1069440824346:web:7ec2c1c1523323cc030da3",
    measurementId: "G-00KM70Q8BG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore reference
const db = firebase.firestore();

