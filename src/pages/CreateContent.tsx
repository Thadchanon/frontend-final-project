import classes from './CreateContent.module.css'
import Rating from '@mui/material/Rating'

const CreateContent = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create new content</h1>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <label>Video URL</label>
          <input type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>Comment (280 characters maximum)</label>
          <input type="text" maxLength={280} />
        </div>
        <div className={classes.rating}>
          <p>Rating :</p>
          <Rating name="simple-controlled" />
        </div>
        <div className={classes.formGroup}>
          <button type="submit" value="Login">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateContent
