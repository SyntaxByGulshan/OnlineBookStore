import React from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'
export default function BookSectionCard(props) {
    const navigate=useNavigate()
  return (
    <>
    <div className='h-40 w-30 bg-black rounded-2xl  flex justify-center items-end  ' onClick={()=>{
    navigate(`/books/${props.section}`)
    }}>
        {props.section}

    </div>
    </>
  )
}
