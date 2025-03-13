import type { IRegisterForm } from '@/shared/types'
import { ref } from 'vue'

export function useRegisterValidation(form: IRegisterForm) {
  const errors = ref<Partial<IRegisterForm>>({})

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
      errors.value.password = 'Пароль должен быть не менее 6 символов'
    }

    if (form.password !== form.confirm_password) {
      errors.value.confirm_password = 'Пароли не совпадают'
    }

    return Object.keys(errors.value).length === 0
  }

  return {
    errors,
    validate,
  }
}
