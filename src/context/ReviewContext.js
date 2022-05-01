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
  const [editId, setEditId] = useState('')
  const [deleteId, setDeleteId] = useState('')
  const [reviews, setReviews] = useState(getFromLocalStorage())

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews))
  }, [reviews])

  function addReviews(review) {
    setReviews((prev) => [review, ...prev])
  }

  function deleteReview(reviewId) {
    setReviews(reviews.filter((review) => review.id !== reviewId))
    setDeleteId('')
  }

  function editReview(reviewId) {
    // toggle edit mode
    if (reviewId === editId) {
      setEditId('')
      setRating(0)
      setReview('')
      return
    }
    setEditId(reviewId)
    reviews.forEach((review) => {
      if (review.id === reviewId) {
        setRating(review.rating)
        setReview(review.review)
      }
    })
  }

  function updateReview(updatedReview) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReview.id) return updatedReview
      else return review
    })
    setReviews(updatedReviews)
    setEditId('')
    setRating(0)
    setReview('')
  }

  function getTotalReviews() {
    return reviews.length
  }

  function getAvgReviews() {
    let avgRating = 0
    reviews.forEach((review) => (avgRating += review.rating))
    avgRating /= reviews.length
    avgRating = avgRating.toFixed(1)
    return avgRating
  }

  return (
    <ReviewContext.Provider
      value={{
        rating,
        setRating,
        review,
        setReview,
        reviews,
        addReviews,
        deleteId,
        setDeleteId,
        deleteReview,
        editId,
        editReview,
        updateReview,
        getTotalReviews,
        getAvgReviews,
      }}
    >
      {children}
    </ReviewContext.Provider>
  )
}

export default ReviewContext
