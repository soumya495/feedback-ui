import Input from '../components/Input'
import Reviews from '../components/Reviews'
import { ReviewContextProvider } from '../context/ReviewContext'
import DeleteConfirmation from '../components/DeleteConfirmation'
import ReviewStats from '../components/ReviewStats'
import { FaQuestion } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='main-container'>
      <ReviewContextProvider>
        <Input />
        <ReviewStats />
        <Reviews />
        <DeleteConfirmation />
      </ReviewContextProvider>
      <NavLink to='/about' className='about-link'>
        <FaQuestion />
      </NavLink>
    </div>
  )
}

export default Home
