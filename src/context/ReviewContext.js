import { createContext, useState, useEffect } from 'react'

const ReviewContext = createContext()

function getFromLocalStorage() {
  const reviews = localStorage.getItem('reviews')
  if (!reviews) return []
  return JSON.parse(reviews)
}

export const ReviewContextProvider = ({ children }) => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const [reviews, setReviews] = useState(getFromLocalStorage())

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews))
  }, [reviews])

  function addReviews(review) {
    setReviews((prev) => [review, ...prev])
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
