import { createContext, useState, useEffect } from 'react'

const ReviewContext = createContext()

export const ReviewContextProvider = ({ children }) => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const [reviews, setReviews] = useState([])

  function addReviews(review) {
    setReviews((prev) => [...prev, review])
  }

  return (
    <ReviewContext.Provider
      value={{ rating, setRating, review, setReview, reviews, addReviews }}
    >
      {children}
    </ReviewContext.Provider>
  )
}

export default ReviewContext
