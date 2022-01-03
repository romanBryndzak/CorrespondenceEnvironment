import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Pages/Main/Main";
import Messages from "./Pages/Messages/Messages";
import Music from "./Pages/Music/Music";
import News from "./Pages/News/News";
import Settings from "./Pages/Settings/Settings";
import {Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <div className="content">
                <Routes>
                    <Route path='/' element={
                        <Main
                            postPage={props.state.postPage}
                            addPost={props.addPost}
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path='/messages' element={
                        <Messages
                            state={props.state.messagesPage}
                            addMessage={props.addMessage}
                            dispatch={props.dispatch}
                        />
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
