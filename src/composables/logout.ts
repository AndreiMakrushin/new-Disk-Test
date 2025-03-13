import { API_URL } from '@/api/api_url'

export const logout = async () => {
  const token = localStorage.getItem('token')

  try {
    const response = await fetch(`${API_URL}auth`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Ошибка при выходе: ' + response.statusText)
    }

    localStorage.removeItem('token')
  } catch (error) {
    console.error('Ошибка при выходе:', error)
  }
}
