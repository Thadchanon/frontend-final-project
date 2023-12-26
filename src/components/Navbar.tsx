import { Link, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useAuth } from '../providers/AuthProvider'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    window.location.reload()
    navigate('/')
  }

  return (
    <nav className={classes.navBar}>
      <div className={classes.menu}>
        <Link to="/" className={classes.logo}>
          <img src={logo} />
          <span>LearnHub</span>
        </Link>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <div className={classes.login} onClick={handleLogout}>
              Log out
            </div>
          </>
        ) : (
          <div className={classes.logo}>
            <Link to="/register" className={classes.login}>
              Register
            </Link>
            <Link to="/login" className={classes.login}>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
