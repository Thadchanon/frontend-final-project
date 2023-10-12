import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useAuth } from '../providers/AuthProvider'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

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
            <div className={classes.login} onClick={logout}>
              Log out
            </div>
          </>
        ) : (
          <Link to="/login" className={classes.login}>
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
