import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import Rating from '@mui/material/Rating'
import youtube from '../assets/youtube.svg'
import star from '../assets/star.svg'
import profile from '../assets/profile.svg'

interface IContentProps {
  content: ContentDTO
}

const Content = ({ content }: IContentProps) => {
  return (
    <Link to={`/content/${content.id}`} className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img src={content.thumbnailUrl} className="w-full h-56 object-cover object-center" />
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <img src={youtube} className="h-6 w-6 text-white fill-current" />
        <h1 className="mx-3 text-white font-semibold text-lg">{content.creatorName}</h1>
      </div>

      <div className="py-4 px-6 ">
        <h1 className="text-2xl font-semibold text-gray-800 ">{content.videoTitle}</h1>
        <p className="py-2 text-lg text-gray-700">{content.comment}</p>
        <div className="flex items-center mt-4 text-gray-700">
          <img src={profile} className="h-6 w-6 text-white fill-current" />
          <h1 className="px-2 text-sm">{content.postedBy.username}</h1>
        </div>

        <div className="flex   mt-4 text-gray-700">
          <img src={star} className="h-6 w-6 text-white fill-current" />
          <h1 className="px-2 text-sm">
            <Rating value={content.rating} readOnly />
          </h1>
        </div>
      </div>
    </Link>
  )
}

export default Content
