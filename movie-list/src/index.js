import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import './style.css';

const store = createStore(reducer,applyMiddleware(thunk));

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
