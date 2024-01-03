import Rating from '@mui/material/Rating'
import { useNavigate, useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

const EditContent = () => {
  const { id } = useParams()
  const { isLoading, error, editContent } = useContent(id || '1')
  const navigate = useNavigate()
  const [rating, setRating] = useState<number>(0)
  const [newComment, setNewComment] = useState<string>('')

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await editContent({ comment: newComment, rating })

      toast.success('Successfully edited!')
      navigate(`/content/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  return (
    <div className="flex flex-col items-center m-8 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800">Edit content</h1>
      <form className="flex flex-col gap-8 my-8" onSubmit={handleEdit}>
        <div className="flex flex-col gap-4 min-w-[350px]">
          <label className="text-lg font-bold text-gray-800">Comment (280 characters maximum)</label>
          <input
            className="p-2 border border-gray-800 rounded-md text-gray-800"
            type="text"
            maxLength={280}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </div>
        <div className="flex text-lg font-bold">
          <p>Rating :</p>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(_, newValue) => {
              if (newValue === null) newValue = 0
              setRating(newValue)
            }}
          />
        </div>
        <div className="flex flex-col gap-4 min-w-[350px]">
          <button
            className=" bg-white text-gray-800 text-base font-semibold border border-gray-800 px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600 cursor-pointer"
            type="submit"
            value="Login"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditContent
