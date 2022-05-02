import { motion } from 'framer-motion'

function Navbar() {
  return (
    <nav>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.85 }}
      >
        Feedback UI
      </motion.h1>
    </nav>
  )
}

export default Navbar
