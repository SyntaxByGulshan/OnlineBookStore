import React from "react";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-4">{user.name}</h1>
          <div className="mb-4">
            <label className="font-semibold">Email:</label>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="mb-4">
            <label className="font-semibold">Age:</label>
            <p className="text-gray-600">{user.age}</p>
          </div>
        </div>
      </div>
    </>
  );
}
