import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateCredentials } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

// this is the component that handles the form for the user to input their credentials

export default function RegisterPage() {
  // this part is variable used while the user is inputting their credentials

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [gender, setgender] = useState();
  const [age, setage] = useState();

  //vaariable used in nevigation of page after form submission

  const navigate = useNavigate();

  // this part is used to dispatch the action to the store

  const dispatch = useDispatch();

  const saveDetails = () => {
    if (password === confirmPassword) {
      dispatch(
        updateCredentials({
          email: email,
          name: name,
          password: password,
          age: age,
          gender: gender,
        })
      );
      alert("successfulll registered now login ");
      navigate("/");
    } else {
      alert("password and confirm password should be same");
    }
  };

  // this field for on change event of input field
  const handleGenderChange = (event) => {
    setgender(event.target.value);
  };

  return (
    <>
      <div className="pt-10 md:pt-16 min-h-screen flex items-center justify-center bg-gray-200">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            saveDetails();
          }}
          className="bg-gray-100 w-full max-w-lg rounded-lg shadow-xl p-6 flex flex-col gap-4"
        >
          {/* Name Input Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Name:
            </label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setname(e.target.value)}
              className="w-full p-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Email Input Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email:
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full p-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Password Input Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Password:
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full p-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Confirm Password Input Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Confirm Password:
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Age Input Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Age:
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setage(e.target.value)}
              className="w-full p-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Gender Input Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Gender:
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={handleGenderChange}
                  className="h-4 w-4 text-gray-800 focus:ring-gray-800 checked:bg-gray-800 "
                />
                <span className="ml-2 text-gray-800">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={handleGenderChange}
                  className="h-4 w-4 text-gray-800 focus:ring-gray-800"
                />
                <span className="ml-2 text-gray-800">Female</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-800 text-gray-100 font-medium rounded-lg hover:bg-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
