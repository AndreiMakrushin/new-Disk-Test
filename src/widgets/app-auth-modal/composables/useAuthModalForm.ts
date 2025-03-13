import { computed, reactive, ref } from 'vue'
import type { IRegisterForm, IAuthForm } from '@/shared/types'
import { useNoteStore } from '@/stores'
import { useRegisterUser } from './useRegisterUser'
import { useValidation } from './useValidation'
import { getToken } from './getToken'

export function useAuthModalForm() {
  const isRegistrationMode = ref(false)
  const noteStore = useNoteStore()

  const modalTitle = computed(() =>
    isRegistrationMode.value ? 'Регистрация' : 'Вход в ваш аккаунт',
  )
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

  const resetForm = () => {
    authForm.email = ''
    authForm.password = ''
    registerForm.email = ''
    registerForm.password = ''
    registerForm.confirm_password = ''
  }

  const { validate: validateReg, errors: errorsReg } = useValidation(registerForm)
  const { validate: validateAuth, errors: errorsAuth } = useValidation(authForm)

  const sendForm = async () => {
    if (isRegistrationMode.value) {
      if (!validateReg()) return
      const error = await useRegisterUser(registerForm)

      if (error) {
        noteStore.error = error.message
      } else {
        resetForm()
      }
    } else if (!isRegistrationMode.value) {
      if (!validateAuth()) return
      noteStore.error = null
      const error = await getToken(authForm)

      if (error) {
        noteStore.error = error.message.toString()
      } else {
        resetForm()
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
    errorsAuth,
    sendForm,
    noteStore,
    authForm,
    registerForm,
  }
}
