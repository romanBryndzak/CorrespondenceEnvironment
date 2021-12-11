import './App.css';
import Header from "./Pages/Header/Header";
import Sidebar from "./Pages/Sidebar/Sidebar";
import Main from "./Pages/Main/Main";

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <content className="content">
               <Main/>
            </content>
            <footer className="footer">Here will be the contact information of the developer!!!</footer>
        </div>
    );
}

export default App;
