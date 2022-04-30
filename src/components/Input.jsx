import { useEffect, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ReviewContext from '../context/ReviewContext'

function Input() {
  const { rating, setRating, review, setReview, addReviews } =
    useContext(ReviewContext)
  const [btnActive, setBtnActive] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (rating >= 1 && rating <= 10 && review !== '') {
      setBtnActive(true)
      if (review.length >= 1 && review.length <= 10)
        setMessage('Review should contain atleast 10 characters!')
      else setMessage('')
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

  return (
    <div className='container'>
      <h2 className='input-heading'>
        How would you rate your service with us?
      </h2>
      <form className='inputfield-container' onSubmit={handleSubmit}>
        <div className='radio-container'>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-1'
              value={1}
              checked={rating === 1}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-1'>1</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-2'
              value={2}
              checked={rating === 2}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-2'>2</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-3'
              value={3}
              checked={rating === 3}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-3'>3</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-4'
              value={4}
              checked={rating === 4}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-4'>4</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-5'
              value={5}
              checked={rating === 5}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-5'>5</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-6'
              value={6}
              checked={rating === 6}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-6'>6</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-7'
              value={7}
              checked={rating === 7}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-7'>7</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-8'
              value={8}
              checked={rating === 8}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-8'>8</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-9'
              value={9}
              checked={rating === 9}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-9'>9</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='rating'
              id='rating-10'
              value={10}
              checked={rating === 10}
              onChange={handleRadioChange}
            />
            <label htmlFor='rating-10'>10</label>
          </div>
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
            Send
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
    </div>
  )
}

export default Input
