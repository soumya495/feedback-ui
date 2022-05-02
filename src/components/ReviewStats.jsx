import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import { motion, AnimatePresence } from 'framer-motion'

function ReviewStats() {
  const { getTotalReviews, getAvgReviews } = useContext(ReviewContext)

  return (
    <AnimatePresence>
      <div className='stats-container'>
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.75 }}
        >
          {getTotalReviews()} Reviews
        </motion.h3>
        <motion.h3
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.75 }}
        >
          Average Rating: {getAvgReviews()}
        </motion.h3>
      </div>
    </AnimatePresence>
  )
}

export default ReviewStats
