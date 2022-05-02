import { useEffect, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ReviewContext from '../context/ReviewContext'
import RadioInputs from './RadioInputs'
import { motion, AnimatePresence } from 'framer-motion'

function Input() {
  const {
    rating,
    setRating,
    review,
    setReview,
    addReviews,
    editId,
    updateReview,
  } = useContext(ReviewContext)
  const [btnActive, setBtnActive] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (rating >= 1 && rating <= 10 && review !== '') {
      setBtnActive(true)
      if (review.length >= 1 && review.length <= 10) {
        setMessage('Review should contain atleast 10 characters!')
        setBtnActive(false)
      } else setMessage('')
    } else {
      setBtnActive(false)
    }
  }, [rating, review])

  const handleRadioChange = (e) => {
    setRating(+e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addReviews({ id: uuidv4(), rating, review })
    setRating(0)
    setReview('')
    setBtnActive(false)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    updateReview({ rating: rating, review: review, id: editId })
  }

  return (
    <AnimatePresence>
      <motion.div
        className='container'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 0.75 }}
      >
        <h2 className='input-heading'>
          How would you rate your service with us?
        </h2>
        <form
          className='inputfield-container'
          onSubmit={editId === '' ? handleSubmit : handleEdit}
        >
          <div className='radio-container'>
            <RadioInputs
              rating={rating}
              handleRadioChange={handleRadioChange}
            />
          </div>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Write a review'
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button
              type='submit'
              disabled={!btnActive}
              className={btnActive ? 'active' : 'not-active'}
            >
              {editId === '' ? 'Send' : 'Edit'}
            </button>
          </div>
        </form>
        <p
          className={`validation-message ${
            message !== '' ? 'active-message' : 'notactive-message'
          }`}
        >
          {message}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}

export default Input
