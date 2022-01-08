import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Music from "./Pages/Music/Music";
import News from "./Pages/News/News";
import Settings from "./Pages/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import MainContainer from "./Pages/Main/MainContainer";
import MessagesContainer from "./Pages/Messages/MessagesContainer";
import UsersContainer from "./Pages/Users/UsersContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <div className="content">
                <Routes>
                    <Route path='/' element={
                        <MainContainer
                        />
                    }/>
                    <Route path='/messages' element={
                        <MessagesContainer/>
                    }/>
                    <Route path='/users' element={
                        <UsersContainer/>
                    }/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>

            </div>
            <footer className="footer">Here will be the contact information of the developer!!!</footer>
        </div>
    );
}

export default App;
