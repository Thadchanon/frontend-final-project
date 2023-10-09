import classes from './Navbar.module.css'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.menu}>
        <div className={classes.logo}>
          <img src={logo} />
          <span>LearnHub</span>
        </div>
      </div>
      <div className={classes.menu}>
        <p>Login</p>
      </div>
    </nav>
  )
}

export default Navbar
