import { computed, reactive, ref } from 'vue'
import type { IRegisterForm, IAuthForm } from '@/shared/types'
import { useNoteStore } from '@/stores'
import { useRegisterUser } from './useRegisterUser'
import { useRegisterValidation } from './useRegisterValidation'
import { getToken } from './getToken'

export function useAuthModalForm() {
  const isRegistrationMode = ref(false)
  const noteStore = useNoteStore()

  const modalTitle = computed(() => (isRegistrationMode.value ? 'Регистрация' : 'Вход'))
  const authHintText = computed(() =>
    isRegistrationMode.value ? 'Есть аккаунт?' : 'У вас нет аккаунта?',
  )
  const submitButtonText = computed(() =>
    isRegistrationMode.value ? 'Зарегистрироваться' : 'Войти',
  )
  const toggleModeText = computed(() => (isRegistrationMode.value ? 'Войти' : 'Зарегистрироваться'))

  const authForm: IAuthForm = reactive({
    email: '',
    password: '',
  })

  const registerForm: IRegisterForm = reactive({
    email: '',
    password: '',
    confirm_password: '',
  })

  const toggleAuthMode = () => {
    isRegistrationMode.value = !isRegistrationMode.value
  }

  const { validate: validateReg, errors: errorsReg } = useRegisterValidation(registerForm)

  const sendForm = async () => {
    if (isRegistrationMode.value) {
      if (!validateReg()) return
      await useRegisterUser(registerForm)
    } else if (!isRegistrationMode.value) {
      if (!authForm.email || !authForm.password) {
        noteStore.error = 'Email и пароль обязательны'
      } else {
        noteStore.error = null
        await getToken(authForm)
      }
    }
  }

  return {
    isRegistrationMode,
    modalTitle,
    authHintText,
    submitButtonText,
    toggleModeText,
    toggleAuthMode,
    errorsReg,
    sendForm,
    noteStore,
    authForm,
    registerForm,
  }
}
