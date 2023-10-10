import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import classes from './Content.module.css'

interface IContentProps {
  content: ContentDTO
}

const Content = ({ content }: IContentProps) => {
  return (
    <Link to={`/post/${content.id}`} className={classes.card}>
      <img src={content.thumbnailUrl}></img>
      <div className={classes.detail}>
        <div className={classes.detailGroup}>
          <div className={classes.titleGroup}>
            <p className={classes.title}>{content.videoTitle}</p>
            <p className={classes.creator}>{content.creatorName}</p>
          </div>
          <p className={classes.comment}>{content.comment}</p>
        </div>
        <div className={classes.detailRow}>
          <p className={classes.postBy}>{content.postedBy.username}</p>
          <div className={classes.rating}>
            <p>{content.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Content
