import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const CreateButton = () => {
  const { isLoggedIn } = useAuth()
  return (
    <div className="flex justify-end my-8 mx-32 ">
      {isLoggedIn && (
        <Link to="/create">
          <div className=" bg-white text-gray-800 text-base font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600 cursor-pointer">
            Create new content
          </div>
        </Link>
      )}
    </div>
  )
}

export default CreateButton
