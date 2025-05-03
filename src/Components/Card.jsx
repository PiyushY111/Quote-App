import React, { useContext, useEffect, useState } from 'react'
import QuoteContext from '../context/QuoteContext'
import { fetchQuote } from '../context/QuoteServices'

const Card = () => {
  const {quoteData, dispatch} = useContext(QuoteContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const getQuote = async() => {
    setIsLoading(true)
    setIsAnimating(true)
    const data = await fetchQuote()
    dispatch({
      type: "GET_QUOTE",
      payload: data
    })
    setTimeout(() => {
      setIsLoading(false)
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {   
    getQuote()    
  }, [])

  return (
    <div className="min-h-[400px] w-full max-w-2xl mx-auto p-8 relative">
      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-300 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
      
      {/* Main card */}
      <div className={`
        relative bg-gradient-to-br from-white to-gray-50 
        rounded-2xl p-8 shadow-2xl
        border border-gray-100
        transform transition-all duration-500
        ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}
      `}>
        {/* Quote mark decoration */}
        <div className="absolute -top-6 -left-6 text-8xl text-purple-200 font-serif">"</div>
        
        <div className="relative z-10">
          <h1 className={`
            my-6 text-3xl font-bold text-gray-800
            leading-relaxed
            transition-all duration-500
            ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}
          `}>
            {quoteData.quote}
          </h1>
          
          <p className={`
            text-xl font-medium text-purple-600 my-6
            transition-all duration-500 delay-100
            ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}
          `}>
            — {quoteData.author}
          </p>
          
          <button
            onClick={getQuote}
            disabled={isLoading}
            className={`
              w-full mt-8 py-4 px-6
              bg-gradient-to-r from-purple-500 to-blue-500
              text-white font-semibold rounded-xl
              transform transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg
              active:scale-[0.98]
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isLoading ? 'animate-pulse' : ''}
            `}
          >
            {isLoading ? 'Loading...' : 'Get New Quote'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
