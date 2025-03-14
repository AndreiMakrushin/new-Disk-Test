import { ref } from 'vue'
import type { TAuthMode } from '@/shared/types'

export function useValidation<T extends TAuthMode>(form: T) {
  const errors = ref<Partial<T>>({})

  const validate = () => {
    errors.value = {}

    if (!form.email) {
      errors.value.email = 'Email обязателен'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.value.email = 'Некорректный email'
    }

    if (!form.password) {
      errors.value.password = 'Пароль обязателен'
    } else if (form.password.length < 6) {
      errors.value.password = 'Минимальная длина пароля 6 символов'
    }

    if ('confirm_password' in form && form.password !== form.confirm_password) {
      errors.value.confirm_password = 'Пароли не совпадают'
    }

    return Object.keys(errors.value).length === 0
  }

  return {
    errors,
    validate,
  }
}
