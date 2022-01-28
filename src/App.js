import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Music from "./Pages/Music/Music";
import News from "./Pages/News/News";
import Settings from "./Pages/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import MainContainer from "./Pages/Main/MainContainer";
import MessagesContainer from "./Pages/Messages/MessagesContainer";
import UsersContainer from "./Pages/Users/UsersContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Pages/Login";
import ProfileInfo from "./Pages/Main/ProfileInfo";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <Sidebar/>
            <div className="content">
                <Routes>
                    <Route path="/profile/*" element={<MainContainer/>}>
                        <Route path=":userId" element={<ProfileInfo/>}/>
                    </Route>
                    <Route path="/messages" element={
                        <MessagesContainer/>
                    }/>
                    <Route path="/users" element={
                        <UsersContainer/>
                    }/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>

            </div>
            <footer className="footer">Here will be the contact information of the developer!!!</footer>
        </div>
    );
}

export default App;
