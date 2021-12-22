import React from 'react';
import Login from './Components/Login/Login'
import './App.css';
import { selectUser } from './Redux/userSlice';
import { useSelector } from 'react-redux';
import Logout from './Components/Logout';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {
        user ? <Logout/> : <Login/>        
      }
    </div>
  );
}

export default App;
