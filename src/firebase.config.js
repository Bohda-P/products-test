
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyDfPHSTqFqisUstwkJWm73DimVgGr3Pgw4',
  authDomain: 'lampa-test-dcd3c.firebaseapp.com',
  projectId: 'lampa-test-dcd3c',
  storageBucket: 'lampa-test-dcd3c.appspot.com',
  messagingSenderId: '388699726790',
  appId: '1:388699726790:web:6664428f16c861ed7a48c7',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
