import React from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {addItem} from "../store/cartSlice";
import { addToWatchList } from "../store/watchList";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const  addToCart = () => {
    dispatch(
        addItem({
        image:book.image,
        name:book.bookName,
        price:book.bookPrice,
        authorName:book.bookAuthor,
        publishDate:book.publishDate,

        })
    )
    }
    const handleAddToWatchList = () => {
      dispatch(
        addToWatchList({
        image:book.image,
        name:book.bookName,
        price:book.bookPrice,
        authorName:book.bookAuthor,
        publishDate:book.publishDate,

        })
    )


    }
  return (
    <div className="bg-white shadow-2xl rounded-xl p-4 w-72 text-center border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <button className="absolute top-2 right-2 text-grey-800 hover:text-red-600"
        onClick={handleAddToWatchList}>
        
  
          <FaHeart size={24} />
        </button>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {book.bookName}
      </h3>
      <p className="text-gray-700">
        <strong>Author:</strong> {book.bookAuthor}
      </p>
      <p className="text-gray-700">
        <strong>Price:</strong> ${book.bookPrice.toFixed(2)}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Publish Date:</strong> {book.publishDate}
      </p>
      <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
      onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;
