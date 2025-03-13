<script setup lang="ts">
import type { INoteCardProps } from './types'

defineProps<INoteCardProps>()
</script>

<template>
  <article class="note-card">
    <div class="note-card__corner"></div>
    <header class="note-card__header">
      <h4 class="note-card__title">{{ title }}</h4>
    </header>
    <p class="note-card__description">{{ content }}</p>
    <footer class="note-card__footer">
      <button class="note-card__delete-button" aria-label="Удалить заметку">Удалить</button>
    </footer>
  </article>
</template>

<style scoped>
.note-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #b1c909;
  border-radius: 12px 12px 0px 12px;
  box-shadow: 0px 15px 15px -10px #00000066;
  clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%);
}
.note-card__corner {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: #a5bb0c;
  border-radius: 0 0 0 12px;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%);
}
.note-card__header {
  padding: 20px 28px;
  border-bottom: 1px solid #a5bb0c;
}

.note-card__title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.note-card__description {
  padding: 20px 28px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
  color: #fff;
  margin: 0;
}

.note-card__footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 28px 20px;
}

.note-card__delete-button {
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
}
</style>
