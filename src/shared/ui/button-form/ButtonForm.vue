<script setup lang="ts">
import type { IButtonFormProps } from './types'

defineProps<IButtonFormProps>()
</script>

<template>
  <button
    class="button"
    :class="[{ 'button--round': round && !title }, { 'button--disabled': disabled }]"
    :aria-label="title"
    :disabled="disabled"
  >
    <slot />

    <span v-if="title">{{ title }}</span>
  </button>
</template>

<style scoped>
.button {
  --button-bg: #b1c909;
  --button-hover: #97ab0d;
  --button-active: #819400;
  --button-disabled: #9da5af;
  --button-text: #fff;

  padding: 12px 24px;
  display: flex;
  font-size: 20px;
  line-height: 32px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: var(--button-bg);
  color: var(--button-text);
  cursor: pointer;
  border-radius: 32px;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: var(--button-hover);
}

.button:active {
  background-color: var(--button-active);
}

.button--disabled {
  background-color: var(--button-disabled);
  cursor: not-allowed;
}

.button--disabled:hover {
  background-color: var(--button-disabled);
}

.button--small {
  padding: 8px 16px;
  font-size: 14px;
}

.button--large {
  padding: 16px 32px;
  font-size: 24px;
}

.button--secondary {
  background-color: transparent;
  border: 2px solid var(--button-bg);
  color: var(--button-bg);
}

.button--outline {
  background-color: transparent;
  border: 2px solid var(--button-bg);
  color: var(--button-bg);
}

.button--outline:hover {
  background-color: var(--button-bg);
  color: var(--button-text);
}

.button--round {
  padding: 24px !important;
}
</style>
