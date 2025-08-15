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
import Profile from './components/Profile';
import Cart from './components/Cart';
import WatchListPage from './components/WatchListPage';
import IndexProvider from './context/indexContext';
import BookDetails from './components/BookDetails';

function App() {
  const navigate = useNavigate();
  const status=useSelector((state) => state.user.isLogin);
// useEffect(() => {
//   if (status) {  
//     navigate("/bookStore");
//   } 
// }, [status]); // Add status as a dependency

  // const ProtectedRoute = ({ children }) => {
  
  //   return status ? children : <Navigate to="/" />;
  // };
  

  return (
    <>
      <IndexProvider>
        <Routes>
        <Route path="" element={<Home />} >
        <Route path="/" element={<LoginPage />} />
        <Route path="/bookDetails" element={<BookDetails/>}/>
        <Route path="bookStore" element={<BookStore />} />
        <Route path="registerPage" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/watchlist" element={<WatchListPage/>} />
       <Route path="/wishListPage" element={<WatchListPage/>} />
        </Route>
       
      </Routes>
      </IndexProvider>
    </>
  );
}

export default App;
