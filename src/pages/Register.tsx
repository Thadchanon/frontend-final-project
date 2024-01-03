import { FormEvent, useState } from 'react'
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
    <div className="flex flex-col items-center m-8 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800">Register</h1>
      <form className="flex flex-col gap-8 my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 min-w-[350px]">
          <label className="text-lg font-bold text-gray-800">Name</label>
          <input
            className="p-2 border border-gray-800 rounded-md text-gray-800"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 min-w-[350px]">
          <label className="text-lg font-bold text-gray-800">Username</label>
          <input
            className="p-2 border border-gray-800 rounded-md text-gray-800"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 min-w-[350px]">
          <label className="text-lg font-bold text-gray-800">Password</label>
          <input
            className="p-2 border border-gray-800 rounded-md text-gray-800"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 min-w-[350px]">
          <button
            className=" bg-white text-gray-800 text-base font-semibold border border-gray-800 px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600 cursor-pointer"
            type="submit"
            value="Register"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
