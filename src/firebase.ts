import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {

    apiKey: "AIzaSyCspVyepaLUrjA4JOpTPcJl_v-H4AHclJc",
  
    authDomain: "notify-a838f.firebaseapp.com",
  
    projectId: "notify-a838f",
  
    storageBucket: "notify-a838f.firebasestorage.app",
  
    messagingSenderId: "928934670833",
  
    appId: "1:928934670833:web:337c2f77281145317ed450",
  
    measurementId: "G-H40QW7DW87"
  
  };
  

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// VAPID KEY from env
const VAPID_KEY = 'BMe-vyA4kti_mCfWP2TkOAzHn00UfZRSSombRJOUET8ieGhVDGhCwyaRnnktradD31LC09KOr-48GZUCxRkopd0';
// Request permission and get FCM token
export const NotificationPermission = async (): Promise<void> => {
    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.warn(' Notification permission was not granted by the user.');
        return;
      }
  
      const token = await getToken(messaging, { vapidKey: VAPID_KEY });
  
      if (token) {
        console.log('Successfully obtained FCM token:', token);
        // TODO: Send this token to your backend if needed
      } else {
        console.warn(' No FCM registration token available. Request permission to generate one.');
      }
    } catch (error) {
      console.error(' Failed to get FCM token:', error);
    }
  };
  
  // Foreground message listener 
  export const onFirebaseMessage = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log(' Foreground message received:', payload);
  
        // Customize notification content here
        const notificationTitle = '🔥 New Alert from Notify!';
        const notificationOptions = {
          body: 'You have a new notification. Check it out now!',
          icon: '/bell.png', // Make sure vite.svg is in your public folder
          // You can add other options like badge, image, actions, etc.
        };
  
        if (Notification.permission === 'granted') {
          new Notification(notificationTitle, notificationOptions);
          console.log('🔔 Displayed custom notification to the user.');
        } else {
          console.warn('⚠️ Notification permission not granted. Cannot display notification.');
        }
  
        resolve(payload);
      });
    });