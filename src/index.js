import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';

// Firebase
import { initializeApp } from "firebase/app";

import 'normalize.css';
import './index.scss';

import content from './content.json';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfDlP1JtvAeN2eT5o_1dPJ0zyjwUH2RMs",
  authDomain: "personal-website-caddc.firebaseapp.com",
  projectId: "personal-website-caddc",
  storageBucket: "personal-website-caddc.appspot.com",
  messagingSenderId: "645407056374",
  appId: "1:645407056374:web:af16a8b12f0a743c2c67d7",
  measurementId: "G-YZXKN6G8V2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { index: true, loader: () => { return content }, element: <Home /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
