import { FormEvent, useState } from 'react'
import classes from './register.module.css'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await register(username, password, name)
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Register</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label>Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={classes.formGroup}>
          <label>Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={classes.formGroup}>
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={classes.formGroup}>
          <button type="submit" value="Register">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
