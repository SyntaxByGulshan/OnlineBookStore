import React, { useState } from "react";
import BookSection from "../bookCatagory/BookSection";

const BookStore = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-400 text-white">
        
        <div className="pt-20 flex flex-col">
       <div className="flex flex-col  ">
        <h1 className="text-3xl font-bold ">Romantic</h1>
         <BookSection type='romantic'/>
       </div>
        <div className="flex flex-col ">
        <h1 className="text-3xl font-bold">thriller</h1>
        <BookSection type='thriller'/>
       </div>
       <div className="flex flex-col  ">
        <h1 className="text-3xl font-bold ">Travel</h1>
        <BookSection type='travel'/>
       </div> 
      </div>
      </div>
    </>
  );
}

export default BookStore;
