import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HelloTalkScreen from './screens/HelloTalkScreen';
import MomentsScreen from './screens/MomentsScreen';
import ConnectScreen from './screens/ConnectScreen';
import LearnScreen from './screens/LearnScreen';
import MeScreen from './screens/MeScreen';
import NavBar from "./Navbar";

function App() {
    return (
        <Router>
            <NavBar/>
            <div className="app">
                <Routes>
                    <Route path="/" exact element={<HelloTalkScreen/>}/>
                    <Route path="/moments" exact element={<MomentsScreen/>}/>
                    <Route path="/connect" exact element={<ConnectScreen/>}/>
                    <Route path="/learn" exact element={<LearnScreen/>}/>
                    <Route path="/me" exact element={<MeScreen/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
