import { useState,useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import BookStore from './components/BookStore';
import LoginPage from './components/LoginPage';
import { Navigate } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { login, logout,updateCredentials } from './store/userSlice';



function App() {
  const navigate = useNavigate();
  const status=useSelector((state) => state.user.isLogin);
useEffect(() => {
  if (status) {  
    navigate("/bookStore");
  } 
}, [status]); // Add status as a dependency

  const ProtectedRoute = ({ children }) => {
  
    return status ? children : <Navigate to="/" />;
  };
  

  return (
    <>
      <Routes>
        <Route path="" element={<Home />} >
        <Route path="/" element={<LoginPage />} />
        <Route path="bookStore" element={<ProtectedRoute><BookStore /></ProtectedRoute>} />
        <Route path="registerPage" element={<RegisterPage />} />
        </Route>
       
      </Routes>
    </>
  );
}

export default App;
