import Navbar from './components/Navbar'
import Input from './components/Input'
import Reviews from './components/Reviews'
import { ReviewContextProvider } from './context/ReviewContext'

function App() {
  return (
    <>
      <Navbar />
      <div className='main-container'>
        <ReviewContextProvider>
          <Input />
          <Reviews />
        </ReviewContextProvider>
      </div>
    </>
  )
}

export default App
