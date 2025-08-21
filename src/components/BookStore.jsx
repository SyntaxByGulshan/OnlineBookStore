import React, { useState } from "react";
import BookSection from "../bookCatagory/BookSection";
import HighLightBookSection from "../bookCatagory/HighLightBookSection";

const BookStore = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-400 text-white">
        
        <div className="pt-20 flex flex-col">
         <div>
          
          <HighLightBookSection type='most readed books' section='popular'/>
          <h1 className="text-6xl text-center">Popular</h1>
         </div>
       <div className="flex flex-col  ">
        
         <BookSection type='romantic'/>
         <h1 className="text-3xl font-bold ">Romantic</h1>
       </div>
        <div className="flex flex-col ">
    
        <BookSection type='thriller'/>
            <h1 className="text-3xl font-bold">thriller</h1>
       </div>
       <div className="flex flex-col  ">
    
        <BookSection type='travel'/>
           <h1 className="text-3xl font-bold ">Travel</h1>
       </div> 
      </div>
      </div>
    </>
  );
}

export default BookStore;
