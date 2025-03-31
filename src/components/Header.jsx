
import { updateCredentials } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);
  const [isVisbal, setisVisable] = useState(false);

  // this part is used to dispatch the action to the store

  const dispatch = useDispatch();
  const fLogout = () => {
    dispatch(
      updateCredentials({
        email: "",
        name: "",
        password: "",
        age: null,
        gender: "",
      })
    );
    navigate("/");
  };
  return (
    <nav
      className="fixed z-50 w-screen bg-gray-600 text-gray-100 shadow-lg"
     
    >
      <div className=" container mx-auto flex justify-between items-center p-4">
        {/* this part is options logo */}
        <div
          className=" md:hidden flex flex-col justify-between w-10 h-10 p-2  border-2 hover:bg-gray-900"
          onClick={() => {
            setisVisable(!isVisbal);
          }}
        >
          <span className="block w-full h-1 bg-gray-200 rounded-md "></span>
          <span className="block w-full h-1 bg-gray-200 rounded-md"></span>
          <span className="block w-full h-1 bg-gray-200 rounded-md"></span>
        </div>
        {/* options */}
        {isVisbal && (
          <div
            className="md:hidden absolute top-full h-dvh left-0  bg-gray-600 bg-opacity-100 text-gray-100 hover:w-40"
            onClick={() => {
              setisVisable(!isVisbal);
            }}
          >
            <ul>
              <li className="px-4 py-2 hover:bg-gray-900 cursor-pointer">
                <NavLink to="/category">Category</NavLink>
              </li>
              <NavLink to="/cart">
                <li className="px-4 py-2 hover:bg-gray-900 cursor-pointer">
                  Cart
                </li>
              </NavLink>
              <NavLink to="/watchlist">
                <li className="px-4 py-2 hover:bg-gray-900 cursor-pointer">
                  Wishlist
                </li>
              </NavLink>
              <NavLink to="/profile">
                <li className="px-4 py-2 hover:bg-gray-900 cursor-pointer">
                  {" "}
                  Profile
                </li>
              </NavLink>
            </ul>
          </div>
        )}
        {/* Logo */}
        <div className="text-xl font-bold">Online Store</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/category" className="hover:text-gray-200">
              Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="hover:text-gray-200">
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className="hover:text-gray-200">
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="hover:text-gray-200">
              Profile
            </NavLink>
          </li>
        </ul>

        {/* Login/Logout Button */}
        <div>
          {isLogin ? (
            <div>
              <button
                className="md:block border-2 border-gray-100 shadow-2xl py-2 px-4 rounded hover:bg-gray-900"
                onClick={fLogout}
              >
                logout
              </button>
            </div>
          ) : (
            <div>
              <button
                className="md:block border-2 border-gray-100 shadow-2xl py-2 px-4 rounded hover:bg-gray-900"
                onClick={() => {
                  navigate("/");
                }}
              >
                login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
