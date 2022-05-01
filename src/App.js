import Navbar from './components/Navbar'
import Input from './components/Input'
import Reviews from './components/Reviews'
import { ReviewContextProvider } from './context/ReviewContext'
import DeleteConfirmation from './components/DeleteConfirmation'

function App() {
  return (
    <>
      <Navbar />
      <div className='main-container'>
        <ReviewContextProvider>
          <Input />
          <Reviews />
          <DeleteConfirmation />
        </ReviewContextProvider>
      </div>
    </>
  )
}

export default App
