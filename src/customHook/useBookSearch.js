import React, { useCallback, useEffect, useState } from 'react'

export default function useBookSearch(searchName) {
  const [books,setBooks]=useState(null)
    // Function to search Open Library and get eBook links
useEffect(()=>{
  async function fetchdata () {
  try {
    // Search API with full-text filter
    const searchUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchName)}&has_fulltext=true`;
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();

    if (!searchData.docs.length) {
      console.log("No eBooks found for that search.");
      // sessionStorage.setItem(searchName,[])
      setBooks([])
       sessionStorage.setItem(searchName,JSON.stringify(searchData))
    }else{
      sessionStorage.setItem(searchName,JSON.stringify(searchData))
      setBooks(searchData)
    }
  } catch (error) {
    console.error("Error fetching eBooks:", error);
  }
}

const bookData=JSON.parse(sessionStorage.getItem(searchName))
if(bookData){
  setBooks(bookData)
}
else{
  fetchdata()
}
}
, [searchName]);

return books
  
}
