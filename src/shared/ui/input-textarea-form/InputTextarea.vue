<script setup lang="ts">
import type { IInputTextareaProps } from './types'

defineProps<IInputTextareaProps>()

const model = defineModel<string>('input')
</script>

<template>
  <div class="input-textarea">
    <span class="input-textarea__label">{{ label }}</span>
    <textarea
      v-model="model"
      :maxlength="count"
      :placeholder="placeholder"
      class="input-textarea__field"
    ></textarea>
    <span class="input-textarea__hint" v-if="count">{{ model?.length ?? 0 }}/{{ count }}</span>
  </div>
</template>

<style scoped>
.input-textarea {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-textarea__label {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #9da5af;
  padding: 0 24px;
}

.input-textarea__field {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #0a1f38;
  padding: 22px 24px;
  border-radius: 36px;
  outline: none;
  border: none;
  transition: all 0.3s ease;
  resize: none; /* Убираем ресйзер */
  width: 100%;
  min-height: 244px;
}

.input-textarea__field:hover {
  box-shadow: inset 0 0 0 2px #b1c909;
}

.input-textarea__field:focus {
  box-shadow: inset 0 0 0 2px #b1c909;
}

.input-textarea__hint {
  width: 100%;
  display: block;
  text-align: right;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #9da5af;
  padding: 0 24px;
}
</style>
