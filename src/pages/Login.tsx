import classes from './Login.module.css'

const Login = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Login</h1>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <label>Username</label>
          <input type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>Password</label>
          <input type="password" />
        </div>
        <div className={classes.formGroup}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
