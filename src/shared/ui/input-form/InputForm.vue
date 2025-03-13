<script setup lang="ts">
import type { IInputFormProps } from './types'

import { ref } from 'vue'

defineProps<IInputFormProps>()

const model = defineModel<string>('input')
const showPassword = ref(false)
</script>

<template>
  <label class="input__form">
    <span class="input__form-label">{{ label }}</span>
    <div class="input__form-field">
      <input
        v-model="model"
        :maxlength="count"
        :class="{ 'disc--input': !showPassword }"
        :placeholder="placeholder"
      />
      <div class="input__form-icon" v-if="type === 'password'">
        <div v-if="!showPassword" @click="showPassword = true">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7C17 8.15478 16.2206 9.64926 14.7228 10.9006C13.2537 12.128 11.2258 13 9 13C6.77424 13 4.7463 12.128 3.27718 10.9006C1.77936 9.64926 1 8.15478 1 7C1 5.84522 1.77936 4.35074 3.27718 3.09941C4.7463 1.87204 6.77424 1 9 1C11.2258 1 13.2537 1.87204 14.7228 3.09941C16.2206 4.35074 17 5.84522 17 7Z"
              stroke="#B1C909"
              stroke-width="2"
            />
            <circle cx="9" cy="7" r="3" stroke="#B1C909" stroke-width="2" />
          </svg>
        </div>
        <div v-else @click="showPassword = false">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 8C17 9.15478 16.2206 10.6493 14.7228 11.9006C13.2537 13.128 11.2258 14 9 14C6.77424 14 4.7463 13.128 3.27718 11.9006C1.77936 10.6493 1 9.15478 1 8C1 6.84522 1.77936 5.35074 3.27718 4.09941C4.7463 2.87204 6.77424 2 9 2C11.2258 2 13.2537 2.87204 14.7228 4.09941C16.2206 5.35074 17 6.84522 17 8Z"
              stroke="#B1C909"
              stroke-width="2"
            />
            <circle cx="9" cy="8" r="3" stroke="#B1C909" stroke-width="2" />
            <path d="M2 1L16 15" stroke="#B1C909" stroke-width="2" />
          </svg>
        </div>
      </div>
    </div>
    <div class="input__form-hint" :class="{ 'input__form-hint_notCount': count }">
      <span class="input__form-count" v-if="count">{{ model?.length ?? 0 }}/{{ count }}</span>
      <span class="input__form-error" v-show="errors">{{ errors }}</span>
    </div>
  </label>
</template>

<style scoped>
.input__form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input__form input:hover {
  box-shadow: inset 0 0 0 2px #b1c909;
  transition: all 0.3s ease;
}
.input__form input:focus {
  box-shadow: inset 0 0 0 2px #b1c909;
  transition: all 0.3s ease;
}
.input__form-field {
  position: relative;
  display: flex;
  width: 100%;
}
.input__form-field input {
  width: 100%;
}
.disc--input {
  -webkit-text-security: disc;
}
.input__form-icon {
  position: absolute;
  right: 24px; /* Оставляем отступ справа */
  top: 50%; /* Смещаем иконку на 50% вниз относительно родителя */
  transform: translateY(-50%); /* Смещаем иконку на 50% вверх относительно её собственной высоты */
}
.input__form-label {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #9da5af;
  padding: 0px 24px;
}

.input__form input {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #0a1f38;
  padding: 22px 24px;
  border-radius: 36px;
  outline: none;
  border: none;
  transition: all 0.3s ease;
}
.input__form-hint {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  padding: 0px 24px;
}
.input__form-count {
  width: fit-content;
  color: #9da5af;
}
.input__form-error {
  position: absolute;
  width: fit-content;
  color: red;
}
.input__form-hint_notCount {
  justify-content: flex-end;
}
</style>
