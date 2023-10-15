import classes from './CreateButton.module.css'
import { Link } from 'react-router-dom'

const CreateButton = () => {
  return (
    <div className={classes.container}>
      <Link to="/create" className={classes.link}>
        <div className={classes.button}>Create new content</div>
      </Link>
    </div>
  )
}

export default CreateButton
