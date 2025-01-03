import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAETztWYVdYc_vmg4qMVZ6JqYwuc274Mk",
  authDomain: "fir-angular-cart.firebaseapp.com",
  databaseURL: "https://fir-angular-cart.firebaseio.com",
  projectId: "fir-angular-cart",
  storageBucket: "fir-angular-cart.firebasestorage.app",
  messagingSenderId: "514249960232",
  appId: "1:514249960232:web:ec4567869b3de734b17e1d",
  measurementId: "G-VSK6KEH79G"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  app = initializeApp(firebaseConfig, "mf-nav-checker");
}

export const auth = getAuth(app);