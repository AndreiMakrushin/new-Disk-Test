import type { IRegisterForm } from '@/shared/types'
import { useSignIn } from '@/composables/useSignIn'
import { API_URL } from '@/api/api_url'

export const useRegisterUser = async (authForm: IRegisterForm) => {
  try {
    const response = await fetch(`${API_URL}reg`, {
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

    const data = await response.json()
    if (data.accessToken) {
      localStorage.setItem('token', data.accessToken)
      await useSignIn()
    }
  } catch (error) {
    return error
  }
}
