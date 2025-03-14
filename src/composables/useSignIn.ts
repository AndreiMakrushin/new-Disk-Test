import { API_URL } from '@/api/api_url'

export const useSignIn = async () => {
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
      return user
    }
  } catch (error) {
    return error
  }
}
