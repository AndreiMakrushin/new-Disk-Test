import type { INoteForm } from '../types'

export const useValidateForm = (form: INoteForm): string | null => {
  if (!form.title || !form.content) {
    return 'Заполните все поля'
  }

  if (form.title.length < 3) {
    return 'Название заметки должно содержать минимум 3 символа'
  }

  if (form.content.length < 10) {
    return 'Текст заметки должен содержать минимум 10 символов'
  }

  return null
}
