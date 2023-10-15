import useContent from '../hooks/useContent'
import classes from './ContentDetail.module.css'
import { useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useAuth } from '../providers/AuthProvider'

const ContentDetail = () => {
  const { id } = useParams()
  const { content, isLoading, error } = useContent(id || '1')
  const { username } = useAuth()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {content && (
          <>
            <div className={classes.header}>
              <h1 className={classes.title}>{content.videoTitle}</h1>
              <Link to={content.creatorUrl} className={classes.creator}>
                <p>{content.creatorName}</p>
              </Link>
            </div>
            <div className={classes.video}>
              <ReactPlayer url={content.videoUrl} controls={true} className={classes.reactPlayer} />
            </div>
            <div className={classes.comment}>
              <p className={classes.commentText}>{content.comment}</p>
              <div className={classes.commentFooter}>
                <Rating value={content.rating} readOnly className={classes.rating} />
                <p>
                  <span className={classes.emDash}>—</span>
                  {content.postedBy.username}
                </p>
                <p>{content.createdAt}</p>
                <p>(Updated on {content.updatedAt})</p>
                {username === content.postedBy.username && (
                  <div>
                    <Link to={`/edit/${id}`} className={classes.edit}>
                      Edit
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ContentDetail
