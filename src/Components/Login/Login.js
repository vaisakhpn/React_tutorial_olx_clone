import React, { useState,useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../Store/FirbaseContext';


function Login() {
  const navigate=useNavigate()
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext);



  const handleChange=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      navigate('/')
    }).catch((error) => {
     alert(error.message)
    });
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleChange}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link className="a" to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
