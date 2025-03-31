import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout ,updateCredentials} from "../store/userSlice";

export default function Profile() {
  const name = useSelector(state => state.user.name);
  const email = useSelector(state => state.user.email);
  const gender = useSelector(state => state.user.gender);
  const age = useSelector(state => state.user.age);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    dispatch(
      updateCredentials({
        email: "",
        name: "",
        password: "",
        age: null,
        gender: "",
      })
    );
    navigate("/"); // Navigate after logout
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200 pt-8">
        <div className="bg-gray-100 p-10 rounded-3xl shadow-xl w-full max-w-lg text-center transform transition-all hover:scale-105">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">User Profile</h2>
          <div className="space-y-4 text-gray-800 text-lg">
            <p className="bg-white p-3 rounded-xl shadow-sm"><span className="font-semibold">Name:</span> {name}</p>
            <p className="bg-white p-3 rounded-xl shadow-sm"><span className="font-semibold">Email:</span> {email}</p>
            <p className="bg-white p-3 rounded-xl shadow-sm"><span className="font-semibold">Gender:</span> {gender}</p>
            <p className="bg-white p-3 rounded-xl shadow-sm"><span className="font-semibold">Age:</span> {age}</p>
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
      </div>
    </>
  );
}
