import React, { useCallback, useContext, useEffect, useState } from 'react'
import useBookSearch from '../customHook/useBookSearch'
import BookCard from '../card/BookCard'
import { IndexContext } from '../context/indexContext'
import { useNavigate } from 'react-router-dom'
export default function BookSection(props) {
  const navigate=useNavigate()
   const {index,setIndex}=useContext(IndexContext)
    const [data,setData]=useState()
    const books1=useBookSearch(props.type)
    console.log(data)
    useEffect(()=>{
      
    
      setData(books1?.docs.filter((_,ind)=>ind<10||null))
  
  
    },[books1])
    

  if(!data){
     return <div>loding</div>
  }else{
    return <div>
       <div className="overflow-x-auto no-scrollbar pb-4">
           <div className="flex space-x-4 px-4">
             {data?.map((book, bookIndex) => (
              <div key={bookIndex} className="flex-shrink-0 rounded-sm " onClick={()=>{

                setIndex([bookIndex,props.type])
                navigate('/bookDetails')
              }}>
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
    </div>
  }
}
