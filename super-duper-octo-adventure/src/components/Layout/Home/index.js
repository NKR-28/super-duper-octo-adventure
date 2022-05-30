import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-n.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 't', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          {' '}
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          ita
          <br />
          web developer
        </h1>
        <h2>Full Stack Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
