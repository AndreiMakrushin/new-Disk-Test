import type { IAuthForm } from '@/shared/types'
import { useSignIn } from '@/composables/useSignIn'
import { useNoteStore } from '@/stores'
import { API_URL } from '@/api/api_url'

export const getToken = async (authForm: IAuthForm) => {
  const noteStore = useNoteStore()
  try {
    const response = await fetch(`${API_URL}auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authForm),
    })

    if (!response.ok) {
      noteStore.error = 'Пользователь с таким логином не найден'
    }

    const token = await response.json()

    if (token.accessToken) {
      localStorage.setItem('token', token.accessToken)
      return await useSignIn()
    }
  } catch (error) {
    throw error
  }
}
