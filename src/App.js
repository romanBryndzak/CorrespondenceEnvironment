import React from "react";
import './App.css';
import Header from "./Pages/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <nav>
                <a href="/profile">Profile</a>
                <a href="/message">Message</a>
                <a href="/music">Music</a>
                <a href="/news">News</a>
                <a href="/settings">Settings</a>
            </nav>
            <body>
            Hello
            </body>
            <footer>
                Here will be the contact
                information of the developer
            </footer>
        </div>
    );
}

export default App;
