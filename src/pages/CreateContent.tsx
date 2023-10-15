import classes from './CreateContent.module.css'
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
    <div className={classes.container}>
      <h1 className={classes.title}>Create new content</h1>
      <form className={classes.form} onSubmit={handleCreate}>
        <div className={classes.formGroup}>
          <label>Video URL</label>
          <input type="text" value={newVideoUrl} onChange={(e) => setNewVideoUrl(e.target.value)} required />
        </div>
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
            value={newRating}
            onChange={(_, newValue) => {
              setNewRating(newValue)
            }}
          />
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
