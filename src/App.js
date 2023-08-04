import React,{useEffect,useContext}from 'react';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Create from './Components/Create/Create';
import View from './Components/View/View';
import './App.css';
import { AuthContext, FirebaseContext } from './Store/FirbaseContext';
import Post from './Store/postContext'
function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view" element={<View />} />
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
