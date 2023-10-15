import classes from './Edit.module.css'
import Rating from '@mui/material/Rating'
import { useNavigate, useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

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
    <div className={classes.container}>
      <h1 className={classes.title}>Edit content</h1>
      <form className={classes.form} onSubmit={handleEdit}>
        <div className={classes.formGroup}>
          <label>Comment (280 characters maximum)</label>
          <input
            type="text"
            maxLength={280}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </div>
        <div className={classes.rating}>
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
        <div className={classes.formGroup}>
          <button type="submit" value="Login">
            Edit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditContent
