import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };

// const firebaseCloudMessaging = {
//   tokenInlocalforage: async () => {
//     return localStorage.getItem("fcm_token");
//   },

//   init: async function () {
//     if (!firebase.getApps().length) {
//       firebase.initializeApp({
//         apiKey: "AIzaSyAE_CY--nuXcAnh7_D-PSbdwzkNDB6e6qQ",
//         authDomain: "the-landscaping-company.firebaseapp.com",
//         projectId: "the-landscaping-company",
//         storageBucket: "the-landscaping-company.firebasestorage.app",
//         messagingSenderId: "510230615322",
//         appId: "1:510230615322:web:f92056e20650a12f9748a3",
//         measurementId: "G-BFL7SPCB31",
//       });

//       try {
//         const messaging = getMessaging();
//         const tokenInLocalForage = await this.tokenInlocalforage();
//         if (tokenInLocalForage !== null) {
//           return tokenInLocalForage;
//         }
//         const status = await Notification.requestPermission();
//         if (status && status === "granted") {
//           const fcm_token = await getToken(messaging, {
//             vapidKey:
//               "BKNFS9L7oGjOxmojsL1iEr0X58HnpfXY4qK8UiwtK0OXfwt_x7TsUrT0rXB6tdlXI8Rt748nqSQqViMIK4t4dvQ",
//           });
//           if (fcm_token) {
//             localStorage.setItem("fcm_token", fcm_token);
//             return fcm_token;
//           }
//         }
//       } catch (error) {
//         console.log(error);
//         return null;
//       }
//     } else {
//       try {
//         const tokenInLocalForage = await this.tokenInlocalforage();
//         if (tokenInLocalForage !== null) {
//           return tokenInLocalForage;
//         }
//         const messaging = getMessaging();
//         const status = await Notification.requestPermission();
//         if (status && status === "granted") {
//           const fcm_token = await getToken(messaging, {
//             vapidKey:
//               "BKNFS9L7oGjOxmojsL1iEr0X58HnpfXY4qK8UiwtK0OXfwt_x7TsUrT0rXB6tdlXI8Rt748nqSQqViMIK4t4dvQ",
//           });
//           if (fcm_token) {
//             localStorage.setItem("fcm_token", fcm_token);
//             return fcm_token;
//           }
//         }
//       } catch (error) {
//         console.log(error);
//         return null;
//       }
//     }
//   },
//   getMessaging: async function () {
//     if (firebase.getApps().length > 0) {
//       try {
//         const messaging = getMessaging();
//         onMessage(messaging, (payLoad) => {
//           console.log("Message Recived", payLoad);
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   },
// };

// export { firebaseCloudMessaging };
