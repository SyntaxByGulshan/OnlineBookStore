import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout , updateProfilePic} from "../store/userSlice";
import { useState } from "react";

export default function Profile() {
  const name = useSelector(state => state.user.name);
  const email = useSelector(state => state.user.email);
  const gender = useSelector(state => state.user.gender);
  const age = useSelector(state => state.user.age);
  const isLogin=useSelector(state => state.user.isLogin);
  const profilePic=useSelector(state => state.user.profilePic);
  console.log("profilePic",profilePic);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate


  const handleLogout = () => {
    dispatch(
      logout()
    );
    navigate("/"); // Navigate after logout
  };
  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateProfilePic(reader.result ));
        
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <>
      {isLogin?
      <div className="flex items-center justify-center min-h-screen bg-gray-200 pt-8">
        <div className="bg-gray-100 p-10 rounded-3xl shadow-xl w-full max-w-lg text-center transform transition-all hover:scale-105">
        <div className="flex flex-col items-center">
      <label htmlFor="fileInput" className="cursor-pointer">
        <div className="w-32 h-32 flex items-center justify-center rounded-full border-2  text-gray-500 hover:border-blue-500 transition">
          {profilePic ? (
            <img src={profilePic} alt="Preview" className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-4xl">+</span>
          )}
        </div>
      </label>
      <input id="fileInput" type="file" accept="image/*" onChange={handleImage} className="hidden" />
    </div>
          <div className="space-y-4 text-gray-800 text-lg">
            <p className="bg-white p-3 rounded-xl shadow-sm">{name}</p>
            <p className="bg-white p-3 rounded-xl shadow-sm"> {email}</p>
            <p className="bg-white p-3 rounded-xl shadow-sm"> {gender}</p>
            <p className="bg-white p-3 rounded-xl shadow-sm"> {age}</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/cart" 
              className=" w-34 px-5 py-3 bg-gray-800 text-gray-100 font-semibold rounded-xl shadow-md hover:bg-gray-950 transition-all">
              My Cart
            </NavLink>
            <NavLink 
              to="/orders" 
              className="w-34 px-5 py-3 bg-gray-800 text-gray-100 font-semibold rounded-xl shadow-md hover:bg-gray-950 transition-all">
              My Orders
            </NavLink>
            <NavLink 
              to="/watchlist" 
              className="w-34 px-5 py-3  bg-gray-800 text-gray-100 font-semibold rounded-xl shadow-md hover:bg-gray-950 transition-all">
              My Watchlist
            </NavLink>
            <button 
              onClick={handleLogout} 
              className="w-34 px-5 py-3 bg-gray-800 text-gray-100 font-semibold rounded-xl shadow-md hover:bg-red-600 transition-all">
              Logout
            </button>
          </div>
        </div>
      </div>:<div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 pt-8  text-2xl">
       <p className="text-center">you are loged out from this system plese login</p> 
       <NavLink to="/">
       <button className="border-2 rounded-xl shadow-2xl border-gray-900 p-2 bg-gray-600 text-gray-100 hover:bg-gray-950">
        login
        </button> 
       </NavLink>
        </div>}
    </>
  );
}
