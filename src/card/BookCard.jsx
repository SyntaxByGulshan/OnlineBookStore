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
                <h3 className="text-lg font-semibold text-red-800 mb-2 bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600  py-1  rounded-lg text-center">
                ${price}
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                    {name}
                </p>
            </div>
        </div>
    );
};

export default BookCard;