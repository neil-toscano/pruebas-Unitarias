import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { App } from './App1';
import { FirstApp } from './FirstApp';
import './app.css'
import {CounterApp}   from './counterApp';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App/> */}
        {/* <FirstApp title='Soy Toscanos' subtitle='curso React' /> */}
        <CounterApp value={ 24 }/>
    </React.StrictMode>
);