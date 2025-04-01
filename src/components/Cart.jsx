import React from "react";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa"; // For delete icon
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const handleRemoveItem = (id) => {
    console.log(`Remove item with id: ${id}`);
    dispatch(removeItem(id));
  };

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-28 object-cover rounded-md"
              />
              <div className="flex-grow ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-700">
                  <strong>Author:</strong> {item.authorName}
                </p>
                <p className="text-gray-700">
                  <strong>Price:</strong> $
                  {item.price ? item.price.toFixed(2) : "N/A"}
                </p>
                <p className="text-gray-700">
                  <strong>Quantity:</strong> {item.quantity}
                </p>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            Total Price: $
            {cartItems
              .reduce((total, item) => total + item.totalPrice, 0)
              .toFixed(2)}
          </h2>
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
