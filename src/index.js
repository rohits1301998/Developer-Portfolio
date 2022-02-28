import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

import { getAnalytics, logEvent } from "firebase/analytics";


function initFirebaseAnalytics() {
    fetch('/__/firebase/init.json').then(async response => {
        const app = initializeApp(await response.json());
        const analytics = getAnalytics(app);
        logEvent(analytics);
    });
}

initFirebaseAnalytics();




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
