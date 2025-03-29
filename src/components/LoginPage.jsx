import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const regEmail = useSelector((state) => state.user.email);
  const regPassword = useSelector((state) => state.user.password);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Correctly initialize navigate

  const check = () => {
    if (email === regEmail && password === regPassword) {
      // Consider using a toast notification or redirecting without an alert
      console.log('login success');
      dispatch(login(true));
      navigate('/bookStore');
    }
    else {
      alert('Invalid Email or Password');
    }
  }

  return (
   <>
    <div className="h-screen flex items-center justify-center bg-gray-200">
  <div className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        check();
      }}
      className="space-y-4"
    >
      {/* Email Input */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      </div>

      {/* Password Input */}
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-800 text-gray-50 font-medium rounded-lg hover:bg-gray-900"
        >
          Login
        </button>
      </div>
    </form>

    {/* Link to Registration Page */}
    <div className="mt-4 text-center">
      <Link to="/registerPage">
        <button
          className="py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          New User
        </button>
      </Link>
    </div>
  </div>
</div>
   </>
  )
}
