import { IoIosHome } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className='main-container'>
      <div className='container'>
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
      </div>
    </div>
  )
}

export default About
