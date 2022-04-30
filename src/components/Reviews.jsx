import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import { ImSad } from 'react-icons/im'
import { FaRegEdit, FaTimes } from 'react-icons/fa'

function Reviews() {
  const { reviews, deleteReview } = useContext(ReviewContext)

  if (reviews.length === 0)
    return (
      <div className='noresults-container'>
        <ImSad fontSize='4rem' />
        <h3>No Reviews Yet!</h3>
      </div>
    )

  return (
    <div className='reviews-container'>
      {reviews.map((review) => (
        <div className='container' key={review.id}>
          <div className='rating'>{review.rating}</div>
          <p className='review'>{review.review}</p>
          <div className='icons'>
            <FaRegEdit fontSize='1.15rem' title='Edit' />
            <FaTimes
              fontSize='1.15rem'
              title='Delete'
              onClick={() => deleteReview(review.id)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Reviews
