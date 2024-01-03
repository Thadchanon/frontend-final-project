import Rating from '@mui/material/Rating'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import useContents from '../hooks/useContents'

const CreateContent = () => {
  const navigate = useNavigate()
  const { createContent } = useContents()
  const [newRating, setNewRating] = useState<number | null>(0)
  const [newVideoUrl, setNewVideoUrl] = useState<string>('')
  const [newComment, setNewComment] = useState<string>('')

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createContent(newVideoUrl, newComment, newRating)
      toast.success('Successfully created!')
      navigate('/')
    } catch (err) {
      if (err instanceof Error) toast.error(err.message)
    }
  }

  return (
    <div className="flex flex-col items-center m-8 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800">Create new content</h1>
      <form className="flex flex-col gap-8 my-8" onSubmit={handleCreate}>
        <div className="flex flex-col gap-4 min-w-[350px]">
          <label className="text-lg font-bold text-gray-800">Video URL</label>
          <input
            className="p-2 border border-gray-800 rounded-md text-gray-800"
            type="text"
            value={newVideoUrl}
            onChange={(e) => setNewVideoUrl(e.target.value)}
            required
          />
        </div>
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
            value={newRating}
            onChange={(_, newValue) => {
              setNewRating(newValue)
            }}
          />
        </div>
        <div className="flex flex-col gap-4 min-w-[350px]">
          <button
            className=" bg-white text-gray-800 text-base font-semibold border border-gray-800 px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600 cursor-pointer"
            type="submit"
            value="Login"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateContent
