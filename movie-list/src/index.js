import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot} from 'react-dom/client';
import "./App.scss";
import App from './App';

//use root.render
const root = createRoot(document.getElementById('root'));
root.render(
    <App></App>
)
