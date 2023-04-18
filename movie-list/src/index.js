import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducer from './store/reducer';
import './style.css';

const store = createStore(reducer);

store.subscribe(() => {
    console.log("last action", store.getState());
});

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
