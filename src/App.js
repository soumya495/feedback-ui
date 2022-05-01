import Navbar from './components/Navbar'
import Input from './components/Input'
import Reviews from './components/Reviews'
import { ReviewContextProvider } from './context/ReviewContext'
import DeleteConfirmation from './components/DeleteConfirmation'
import ReviewStats from './components/ReviewStats'

function App() {
  return (
    <>
      <Navbar />
      <div className='main-container'>
        <ReviewContextProvider>
          <Input />
          <ReviewStats />
          <Reviews />
          <DeleteConfirmation />
        </ReviewContextProvider>
      </div>
    </>
  )
}

export default App
