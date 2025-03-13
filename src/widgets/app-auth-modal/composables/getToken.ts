import type { IAuthForm } from '@/shared/types'
import { useSignIn } from '@/composables/useSignIn'
import { API_URL } from '@/api/api_url'

export const getToken = async (authForm: IAuthForm) => {
  try {
    const response = await fetch(`${API_URL}auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authForm),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return errorData
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
