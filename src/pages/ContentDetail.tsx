import useContent from '../hooks/useContent'
import classes from './ContentDetail.module.css'
import { useParams } from 'react-router-dom'

const ContentDetail = () => {
  const { id } = useParams()
  const { content, isLoading, error } = useContent(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <div className={classes.container}>
      {content && (
        <>
          <h1>{content.videoTitle}</h1>
          <p>{content.creatorName}</p>
          <img src={content.thumbnailUrl}></img>
          <p>{content.comment}</p>
          <p>{content.rating}</p>
          <p>{content.postedBy.username}</p>
          <p>{content.createdAt}</p>
          <p>{content.updatedAt}</p>
        </>
      )}
    </div>
  )
}

export default ContentDetail
