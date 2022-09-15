
// importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  // 'messagingSenderId': '947079766268'
  apiKey: "AIzaSyDkrQGrokNIAk6nfrQ61zHRZQ_5466HkBY",
   authDomain: "angularpuhweb.firebaseapp.com",
   databaseURL: "https://angularpuhweb.firebaseio.com",
   projectId: "angularpuhweb",
   storageBucket: "angularpuhweb.appspot.com",
   messagingSenderId: "947079766268",
   appId: "1:947079766268:web:e32a290cfef0bdc4fff779",
   measurementId: "G-SBTGF93D04"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


//  const firebase = initializeApp({
//    apiKey: "AIzaSyDkrQGrokNIAk6nfrQ61zHRZQ_5466HkBY",
// //    authDomain: "angularpuhweb.firebaseapp.com",
// //    databaseURL: "https://angularpuhweb.firebaseio.com",
// //    projectId: "angularpuhweb",
// //    storageBucket: "angularpuhweb.appspot.com",
// //    messagingSenderId: "947079766268",
// //    appId: "1:947079766268:web:e32a290cfef0bdc4fff779",
// //    measurementId: "G-SBTGF93D04"
//  });

// //  // Initialize Firebase
// const app = initializeApp(firebase);
// // //  const messaging = firebase.messaging();
// //  const messaging = getMessaging(firebaseApp);


// //  messaging.onBackgroundMessage(function(payload) {
// //   console.log('[firebase-messaging-sw.js] Received background message ', payload);
// //   // Customize notification here
// //   const notificationTitle = 'Background Message Title';
// //   const notificationOptions = {
// //     body: 'Background Message body.',
// //     icon: '/firebase-logo.png'
// //   };

// //   self.registration.showNotification(notificationTitle,
// //     notificationOptions);
// // });
