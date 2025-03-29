import React from "react";

const BookCard = ({ photo, name, price }) => {
    return (
        <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <img
                src={photo}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400  py-1 px-2 rounded-lg text-center">
                    {name}
                </h3>
                <p className="text-green-500 font-bold text-lg mb-4">
                    ${price}
                </p>
            </div>
        </div>
    );
};

export default BookCard;