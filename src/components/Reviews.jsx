import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import { ImSad } from 'react-icons/im'
import { FaRegEdit, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

function Reviews() {
  const { reviews, editReview, editId, setDeleteId } = useContext(ReviewContext)

  if (reviews.length === 0)
    return (
      <AnimatePresence>
        <motion.div
          key='NotFound'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
          className='noresults-container'
        >
          <ImSad fontSize='4rem' />
          <h3>No Reviews Yet!</h3>
        </motion.div>
      </AnimatePresence>
    )

  return (
    <div className='reviews-container'>
      <AnimatePresence>
        {reviews.map((review) => (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className={`container ${
              editId === review.id ? 'editing' : 'non-editing'
            }`}
            key={review.id}
          >
            <div className='rating'>{review.rating}</div>
            <p className='review'>{review.review}</p>
            <div className='icons'>
              <FaRegEdit
                fontSize='1.15rem'
                title='Edit'
                onClick={() => editReview(review.id)}
              />
              <FaTimes
                fontSize='1.15rem'
                title='Delete'
                onClick={() => setDeleteId(review.id)}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Reviews
