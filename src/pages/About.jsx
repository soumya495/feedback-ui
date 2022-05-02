import { IoIosHome } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function About() {
  return (
    <AnimatePresence>
      <div className='main-container'>
        <motion.div
          className='container'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring' }}
        >
          <h1>About the Project</h1>
          <h3 style={{ marginTop: '1rem' }}>
            This Project is a part of Brad Traversy's React Front to Back Course
            on Udemy
          </h3>
          <h3 style={{ marginTop: '1rem' }}>
            Made By:{' '}
            <a
              href='https://github.com/soumya495'
              target='_blank'
              rel='noopener noreferrer'
            >
              Soumya Banerjee
            </a>
          </h3>
          <h4 style={{ marginTop: '1rem' }}>
            <NavLink to='/' style={{ display: 'flex', alignItems: 'center' }}>
              {' '}
              <IoIosHome fontSize='1.25rem' /> Back To Home
            </NavLink>
          </h4>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default About
