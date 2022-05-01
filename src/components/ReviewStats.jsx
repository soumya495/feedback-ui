import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'

function ReviewStats() {
  const { getTotalReviews, getAvgReviews } = useContext(ReviewContext)

  return (
    <div className='stats-container'>
      <h3>{getTotalReviews()} Reviews</h3>
      <h3>Average Rating: {getAvgReviews()}</h3>
    </div>
  )
}

export default ReviewStats
