import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import TaskForm from './TaskForm'
import Counter from './Counter';
import LightSwitch from './LightSwitch';
import ExpenceTracker from './ExpenseTracker';
import ScoreApp from './scoreApp.js';
import WaterSizing from './WaterSizing.js';
import HomeMantainance from './HomeMantainance.js';
import RegForm from './RegForm.js';
import PlumbingCompanyWebsite from './PlumbingCompanyWebsite.js'
import NewPlumbing from './NewPlumbing.js';
import Ugamaa from './Ugamaa.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewPlumbing
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
