import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import useBookSearch from '../customHook/useBookSearch'
import BookCard from '../card/BookCard'
import { IndexContext } from '../context/indexContext'
import { useNavigate } from 'react-router-dom'

export default function CustomBookType() {
    const {id}=useParams()
    const book=useBookSearch(id)
    const {index,setIndex}=useContext(IndexContext)
    const navigate=useNavigate()
    console.log(book)
    console.log(id)

if (!book) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className=" rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  } else {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Books for: {id}</h1>
        <div className="flex flex-wrap justify-center items-center  gap-2 ">
          {book.docs?.map((book, bookIndex) => (
            <div 
              key={bookIndex} 
              className="cursor-pointer transform transition-transform duration-200 hover:scale-105 "
             onClick={()=>{
            setIndex([bookIndex,id])
            navigate('/bookDetails')
             }}
            >
              <BookCard
                title={book.title}
                authorNames={book.author_name}
                languages={book.language}
                coverId={book.cover_i}
                />
                </div>
          ))}
          </div>
          </div>
    )}
}
