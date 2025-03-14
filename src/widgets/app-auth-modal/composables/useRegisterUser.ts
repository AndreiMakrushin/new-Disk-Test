import type { IRegisterForm } from '@/shared/types'
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
      console.log('Registration failed:', errorData)
      return { message: errorData.message || 'Ошибка регистрации' }
    }

    const data = await response.json()
    if (data) {
      localStorage.setItem('token', data.accessToken)
      console.log('Registration successful:', data)
      return data
    }
  } catch (error) {
    console.error('Registration failed:', error)
    return { message: 'Ошибка сети' }
  }
}
