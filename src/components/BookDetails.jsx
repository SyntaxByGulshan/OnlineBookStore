import React, { useCallback, useContext, useEffect } from 'react'
import { IndexContext } from '../context/indexContext'
import { useNavigate } from 'react-router-dom'

export default function BookDetails() {
    const navigate=useNavigate()
    const{index}=useContext(IndexContext)
    useEffect(()=>{
        console.log(index)
   
    if(index==null){
        navigate("/bookStore")
    }else{
         const book= JSON.parse( sessionStoragegetItem(index[1]))
         console.log(book.docs[0])

    }
    })
  return (
  <>
   
  </>
  );
}
