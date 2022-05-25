import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/"></Link>
    <img src={LogoS} alt="logo" />
    <img src={LogoS} alt="logo" />
  </div>
)

export default Sidebar
