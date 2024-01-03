import useContent from '../hooks/useContent'
import { useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useAuth } from '../providers/AuthProvider'

const ContentDetail = () => {
  const { id } = useParams()
  const { content, isLoading, error, deleteContent } = useContent(id || '1')
  const { username } = useAuth()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  const handleDelete = () => {
    deleteContent()
  }

  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full ">
      {content && (
        <div className="w-full h-4/5 flex justify-center items-center ">
          <div className="grid grid-cols-2 gap-3  bg-white shadow-lg  border rounded-lg">
            <div className="col-span-1">
              <ReactPlayer
                className="w-full aspect-video object-cover rounded-lg "
                url={content.videoUrl}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <div className="py-4 px-6 flex flex-col gap-20">
              <div className="detailGroup flex flex-col gap-12">
                <div className="titleGroup">
                  <h4 className="font-bold text-2xl">{content.videoTitle}</h4>
                  <p className="text-base text-[#AAAAAA]">{content.creatorName}</p>
                </div>
                <div className="relative italic text-3xl text-gray-800 before:content-['“'] before:text-8xl before:text-gray-800   ">
                  <p className="absolute top-8 left-16 ">{content.comment}</p>
                </div>

                <div className="flex flex-col gap-2 items-end">
                  <p className="text-lg  ">
                    Posted by<span className="mx-1 text-xl">—</span>
                    {content.postedBy.name}
                  </p>
                  <Rating value={content.rating} readOnly className="scale-x-[-1]" />
                  <p>{content.createdAt}</p>
                  <p>(Updated on {content.updatedAt})</p>
                  {username === content.postedBy.username && (
                    <div className="flex gap-6">
                      <Link
                        to={`/edit/${id}`}
                        className="text-lg text-gray-800 font-bold flex items-center gap-2 hover:text-purple-600"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={handleDelete}
                        className="text-lg text-gray-800 font-bold flex items-center hover:text-purple-600 gap-1"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContentDetail
