import React, { useCallback, useContext, useEffect, useState } from 'react'
import useBookSearch from '../customHook/useBookSearch'
import BookCard from '../card/BookCard'
import { IndexContext } from '../context/indexContext'
import { useNavigate, useParams } from 'react-router-dom'

export default function BookSection(props) {
  const navigate = useNavigate()
  const { id } = useParams() // Extract the dynamic ID from URL
  const { index, setIndex } = useContext(IndexContext)
  const [data, setData] = useState()
  
  // Use the ID from URL params or fallback to props
  const bookId = id || props.type
  const books1 = useBookSearch(bookId)

  useEffect(() => {
    if (books1?.docs) {
      setData(books1?.docs.filter((_, ind) => ind < 10 || null))
    }
  }, [books1])

  if (!data) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className=" animate-bounce rounded-full h-32 w-32 border-2 border-gray-900"></div>
    </div>
  } else {
    return (
      <div className="container mx-auto px-4 py-8">
        
        <div className="flex overflow-y-scroll scrollbar-hide ">
          {data?.map((book, bookIndex) => (
            <div 
              key={bookIndex} 
              className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
              onClick={() => {
                setIndex([bookIndex, bookId])
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
    )}}
