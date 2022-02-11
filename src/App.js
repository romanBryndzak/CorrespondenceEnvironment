import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import MainContainer from "./component/Main/MainContainer";
import MessagesContainer from "./component/Messages/MessagesContainer";
import UsersContainer from "./component/Users/UsersContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";
import ProfileInfo from "./component/Main/ProfileInfo";

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
