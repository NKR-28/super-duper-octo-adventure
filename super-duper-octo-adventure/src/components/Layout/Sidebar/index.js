import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoN from '../../assets/images/logo-n.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoN} alt="logo" />
      <img src={LogoSubtitle} alt="nita" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nita-roberts/"
        >
          <FontAwesomeIcon icon={faLinkedIn} color="4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/NKR-28">
          <FontAwesomeIcon icon={faGitHub} color="4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
