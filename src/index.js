import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 addPost={store.addPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 changePost={store.changePost.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
