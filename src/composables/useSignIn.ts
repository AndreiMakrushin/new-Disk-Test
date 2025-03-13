import { API_URL } from '@/api/api_url'
import { useNoteStore } from '@/stores'
import { getNotes } from '@/composables/getNotes'

export const useSignIn = async () => {
  const noteStore = useNoteStore()
  const token = localStorage.getItem('token')

  try {
    if (!token) return

    const response = await fetch(`${API_URL}auth`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`)
    }

    const user = await response.json()

    if (user) {
      noteStore.userData = user
      await getNotes()
      noteStore.closeAuthModal()
    }
  } catch (error) {
    return (noteStore.error = (error as string) + 'Ошибка авторизации')
  }
}
