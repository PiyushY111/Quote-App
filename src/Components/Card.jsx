import React, { useContext, useEffect } from 'react'
import QuoteContext from '../context/QuoteContext'
import { fetchQuote } from '../context/QuoteServices'

const Card = () => {

  const {quoteData , dispatch} = useContext(QuoteContext)

  const getQuote =  async() =>{
   const data = await fetchQuote();
   dispatch({
    type : "GET_QUOTE",
    payload : data
   })

  }

useEffect( () =>{   
  getQuote()    
},[])


  return (
<div className="bg-green-200  rounded-md p-5  ">
  <h1 className='my-4 text-2xl font-bold'>{quoteData.quote}</h1>
  <p className='text-xl font-semi-bold my-4'>{quoteData.author}</p>  
  <button
  onClick={getQuote}
  className='uppercased w-full bg-green-400 cursor-pointer rounded-md p-2 text-white font-semi-bold'>get more</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
</div>
  )
}

export default Card
