import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyAyTcKbpjZbVc-RrVxm51LXs_GLYDh9iqM",
  authDomain: "matrices-748d0.firebaseapp.com",
  projectId: "matrices-748d0",
  storageBucket: "matrices-748d0.appspot.com",
  messagingSenderId: "701687305193",
  appId: "1:701687305193:web:dda21b5029e0bf0b91f178"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider>
      <App />
    </ChakraProvider>

)
