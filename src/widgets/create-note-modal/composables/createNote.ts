import type { INoteForm } from '../types'
import { API_URL } from '@/api/api_url'

export const createNote = async (noteForm: INoteForm) => {
  try {
    const token = localStorage.getItem('token')

    const response = await fetch(`${API_URL}notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(noteForm),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return errorData
    }

    const data = await response.json()
    if (data && response) {
      return data
    }
  } catch (error) {
    return error
  }
}
