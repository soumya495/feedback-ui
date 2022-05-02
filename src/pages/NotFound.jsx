import { IoIosHome } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
function NotFound() {
  return (
    <div className='main-container'>
      <div className='container' style={{ textAlign: 'center' }}>
        <h2>404, Not Found</h2>
        <h4 style={{ marginTop: '1rem' }}>
          <NavLink
            to='/'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {' '}
            <IoIosHome fontSize='1.25rem' /> Back To Home
          </NavLink>
        </h4>
      </div>
    </div>
  )
}

export default NotFound
