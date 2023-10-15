import { useEffect, useState } from 'react'
import { ContentDTO, UpdateContentDTO } from '../types/dto'
import axios from 'axios'
import { useNavigate } from 'react-router'

const useContent = (id: string) => {
  const [content, setContent] = useState<ContentDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`)

        setContent({ ...res.data, createdAt: toDate(res.data.createdAt), updatedAt: toDate(res.data.updatedAt) })
      } catch (err) {
        setError('Data not found')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  const toDate = (d: string) => {
    const date = new Date(d)
    return date.toDateString()
  }

  const editContent = async (updateBody: UpdateContentDTO) => {
    const token = localStorage.getItem('token')

    try {
      await axios.patch(`https://api.learnhub.thanayut.in.th/content/${id}`, updateBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      throw new Error('Can not edit content!')
    }
  }

  const navigate = useNavigate()

  const deleteContent = async () => {
    const token = localStorage.getItem('token')
    try {
      await axios.delete(`https://api.learnhub.thanayut.in.th/content/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      navigate('/')
    } catch (err) {
      setError('Cannot delete content id : ' + id)
    }
  }

  return { content, isLoading, error, editContent, deleteContent }
}

export default useContent
