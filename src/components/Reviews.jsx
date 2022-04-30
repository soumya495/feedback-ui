import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import { ImSad } from 'react-icons/im'

function Reviews() {
  const { reviews } = useContext(ReviewContext)

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
          {review.review}
        </div>
      ))}
    </div>
  )
}

export default Reviews
