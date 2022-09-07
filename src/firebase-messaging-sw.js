// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getMessaging } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-sw.js";
importScripts('https://www.gstatic.com/firebasejs/9.1.4/firebase-app-compat.js');
//  importScripts("https://www.gstatic.com/firebasejs/9.1.4/firebase-messaging-compat.js");
//  importScripts("https://www.gstatic.com/firebasejs/9.1.4/firebase/init.js");


 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebase = initializeApp({
   apiKey: "AIzaSyDkrQGrokNIAk6nfrQ61zHRZQ_5466HkBY",
   authDomain: "angularpuhweb.firebaseapp.com",
   databaseURL: "https://angularpuhweb.firebaseio.com",
   projectId: "angularpuhweb",
   storageBucket: "angularpuhweb.appspot.com",
   messagingSenderId: "947079766268",
   appId: "1:947079766268:web:e32a290cfef0bdc4fff779",
   measurementId: "G-SBTGF93D04"
 });

 // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const messaging = firebase.messaging();
 const messaging = getMessaging(firebaseApp);


//  messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
