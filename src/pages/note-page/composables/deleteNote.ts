import { getNotes } from '@/composables/getNotes'

export const deleteNote = async (id: number) => {
  try {
    const token = localStorage.getItem('token')

    await fetch(`https://dist.nd.ru/api/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    return await getNotes()
  } catch (error) {
    console.error('Ошибка удаления заметки:', error)
  }
}
