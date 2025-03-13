<script setup lang="ts">
import ButtonForm from '../button-form'
import closeIcon from '@/shared/assets/svg/close-icon.vue'
import type { IModalLayoutProps } from './types'
const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}

defineProps<IModalLayoutProps>()
</script>

<template>
  <Teleport to="body">
    <div class="auth-modal">
      <div class="auth-modal__overlay"></div>

      <div class="auth-modal__content">
        <ButtonForm @click="close" round class="auth-modal__close-button"><closeIcon /></ButtonForm>
        <slot />

        <span v-if="error" class="auth-modal__error">{{ error }}</span>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.auth-modal {
  --auth-modal-bg: #1b2f46;
  --auth-modal-overlay-bg: rgba(10, 31, 56, 0.7);
  --auth-modal-text-color: #fff;
  --auth-modal-link-color: #b1c909;
  --auth-modal-hint-text-color: #9da5af;
  --auth-modal-border-radius: 40px;
  --auth-modal-gap: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.auth-modal__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--auth-modal-overlay-bg);
  z-index: -1;
}
.auth-modal__error {
  background-color: #ff74611a;
  color: #ff7461;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
}
.auth-modal__content {
  position: relative;
  width: 780px;
  max-height: calc(100vh-60px);
  background-color: var(--auth-modal-bg);
  border-radius: var(--auth-modal-border-radius);
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: var(--auth-modal-gap);
}
.auth-modal__close-button {
  position: absolute;
  top: 20px;
  right: 20px;
}

@media screen and (max-width: 1366px) {
  .auth-modal__content {
    padding: 56px;
    width: 594px;
  }
}

@media screen and (max-width: 768px) {
  .auth-modal__content {
    width: 88%;
  }
}

@media screen and (max-width: 500px) {
  .auth-modal__content {
    padding: 50px 16px;
    width: 100%;
    height: 100%;
    gap: 28px;
  }
}
</style>
