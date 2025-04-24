// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCspVyepaLUrjA4JOpTPcJl_v-H4AHclJc",
  authDomain: "notify-a838f.firebaseapp.com",
  projectId: "notify-a838f",
  storageBucket: "notify-a838f.appspot.com",
  messagingSenderId: "928934670833",
  appId: "1:928934670833:web:337c2f77281145317ed450",
  measurementId: "G-H40QW7DW87"
});

const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/vite.svg' ,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});