import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ModalProvider from "./contexts/ModalContext";

const root: HTMLElement | null = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        {/* @note: I wrap my whole app with this <ModalProvider> because the generic overlay is triggered anywhere in the app*/}
        <ModalProvider>
            <App/>
        </ModalProvider>
    </React.StrictMode>,
    root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
