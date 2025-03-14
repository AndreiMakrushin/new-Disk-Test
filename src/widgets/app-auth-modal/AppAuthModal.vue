<script setup lang="ts">
import { useAuthModalForm } from './composables/useAuthModalForm'
import ModalLayout from '@/shared/layouts/modal-layout'
import ButtonForm from '@/shared/ui/button-form'
import InputForm from '@/shared/ui/input-form'

const {
  isRegistrationMode,
  modalTitle,
  authHintText,
  submitButtonText,
  toggleModeText,
  toggleAuthMode,
  errorsReg,
  errorsAuth,
  sendForm,
  registerForm,
  authForm,
  noteStore,
} = useAuthModalForm()
</script>

<template>
  <ModalLayout
    :error="noteStore.error"
    v-if="noteStore.isAuthModal"
    @close="noteStore.closeAuthModal"
    ><h2 class="auth-modal__title">{{ modalTitle }}</h2>

    <form class="auth-modal__form" v-if="isRegistrationMode">
      <InputForm
        v-model:input="registerForm.email"
        label="Email"
        type="email"
        :errors="errorsReg.email"
        placeholder="Введите email"
      />
      <InputForm
        :errors="errorsReg.password"
        v-model:input="registerForm.password"
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
      />
      <InputForm
        :errors="errorsReg.confirm_password"
        v-model:input="registerForm.confirm_password"
        label="Пароль ещё раз"
        type="password"
        placeholder="Введите пароль ещё раз"
      />
    </form>

    <form class="auth-modal__form" v-else>
      <InputForm
        v-model:input="authForm.email"
        label="Email"
        type="email"
        :errors="errorsAuth.email"
        placeholder="Введите email"
      />
      <InputForm
        v-model:input="authForm.password"
        label="Пароль"
        :errors="errorsAuth.password"
        type="password"
        placeholder="Введите пароль"
      />
    </form>

    <div class="auth-modal__footer">
      <div class="auth-modal__footer-hint">
        <span class="auth-modal__footer-hint-text">{{ authHintText }}</span>
        <button class="auth-modal__footer-hint-link" @click="toggleAuthMode">
          {{ toggleModeText }}
        </button>
      </div>

      <ButtonForm
        class="auth-modal__footer-button"
        @click.prevent="sendForm"
        :title="submitButtonText"
      />
    </div>
  </ModalLayout>
</template>

<style scoped>
.auth-modal__title {
  font-size: 48px;
  line-height: 72px;
  font-weight: 600;
  color: var(--auth-modal-text-color);
}
@media screen and (max-width: 1366px) {
  .auth-modal__title {
    padding-right: 20px;
  }
}

@media screen and (max-width: 500px) {
  .auth-modal__title {
    font-size: 32px;
    line-height: 36px;
  }
}

.auth-modal__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.auth-modal__footer {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}

.auth-modal__footer-hint {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media screen and (max-width: 500px) {
  .auth-modal__footer {
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: 500px) {
  .auth-modal__footer-button {
    width: 100%;
  }
}

.auth-modal__footer-hint-text {
  font-size: 18px;
  line-height: 28px;
  color: var(--auth-modal-hint-text-color);
}

.auth-modal__footer-hint-link {
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  color: var(--auth-modal-link-color);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}
</style>
