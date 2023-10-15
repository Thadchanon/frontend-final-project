import classes from './CreateButton.module.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const CreateButton = () => {
  const { isLoggedIn } = useAuth()
  return (
    <div className={classes.container}>
      {isLoggedIn && (
        <Link to="/create" className={classes.link}>
          <div className={classes.button}>Create new content</div>
        </Link>
      )}
    </div>
  )
}

export default CreateButton
