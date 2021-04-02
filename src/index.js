import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './Banner/Banner';
import reportWebVitals from './reportWebVitals';
import Description from "./Description/Description";

ReactDOM.render(
    <React.StrictMode>
        <Banner/>
        <Description/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
