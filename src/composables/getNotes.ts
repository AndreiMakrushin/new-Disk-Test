import type { INoteList } from '@/shared/types'
import { useNoteStore } from '@/stores'

export const getNotes = async () => {
  const noteStore = useNoteStore()
  try {
    const token = localStorage.getItem('token')

    if (!token) return

    const response = await fetch('https://dist.nd.ru/api/notes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Ошибка при получении заметок')
    }

    const data = await response.json()

    noteStore.noteList = data as INoteList[]
  } catch (error) {
    console.error('Ошибка при получении заметок:', error)
    return []
  }
}
