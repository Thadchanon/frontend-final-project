import { useEffect, useState } from 'react'
import { ContentDTO, ContentsDTO, CreateContentDTO } from '../types/dto'
import axios from 'axios'

const useContents = () => {
  const [contents, setContents] = useState<ContentsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentsDTO>('http://localhost:8080/content')

        setContents(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const createContent = async (newVideoUrl: string, newComment: string, newRating: number | null) => {
    const newContent: CreateContentDTO = {
      videoUrl: newVideoUrl,
      comment: newComment,
      rating: newRating || 0,
    }
    const token = localStorage.getItem('token')

    try {
      await axios.post<ContentDTO>('http://localhost:8080/content', newContent, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
    } catch (err) {
      throw new Error('Cannot create content')
    }
  }

  return { contents, isLoading, createContent }
}

export default useContents
