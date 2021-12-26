import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const users = [
    {id: "1", name: "Roman"},
    {id: "2", name: "Maryna"},
    {id: "3", name: "Rostyslav"},
    {id: "4", name: "Snizhana"},
    {id: "5", name: "Illia"}
]

const messages = [
    {id: 0, message: "Hello peopel!"},
    {id: 1, message: "Hi freind!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "I am fine thanks. "},
]

const posts = [
    {id: 0, post: "Development in react is very interesting!", like: 5},
    {id: 1, post: "Yes bro, I support your opinion.", like: 2},
    {id: 2, post: "On my think, angular is better!", like: 0},
]

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts} messages={messages} users={users}/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
