export const getNotes = async () => {
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

    return data
  } catch (error) {
    console.error('Ошибка при получении заметок:', error)
    return []
  }
}
