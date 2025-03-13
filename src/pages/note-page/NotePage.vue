<script setup lang="ts">
import { useNoteStore } from '@/stores'
import { deleteNote } from './composables/deleteNote'
import ButtonForm from '@/shared/ui/button-form'
import NoteCard from '@/shared/ui/note-card/NoteCard.vue'
import plusIcon from '@/shared/assets/svg/plus-icon.vue'

const noteStore = useNoteStore()
</script>

<template>
  <section class="note-container">
    <ButtonForm
      @click="noteStore.openAddNoteModal"
      class="note-add-button"
      round
      aria-label="Добавить заметку"
      ><plusIcon
    /></ButtonForm>

    <TransitionGroup class="note-card-container" name="fade" tag="div">
      <NoteCard
        v-for="note in noteStore.noteList"
        :key="note.id"
        v-bind="note"
        @click="deleteNote(note.id)"
      />
    </TransitionGroup>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.note-card-container {
  position: relative;
}
.note-container {
  padding: 40px 0;
}

.note-add-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.note-card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

@media screen and (max-width: 768px) {
  .note-card-container {
    display: flex;
    flex-direction: column;
  }
}

.note-card {
  display: flex;
  flex-direction: column;
  background: #b1c909;
  border-radius: 12px 12px 0px 12px;
  box-shadow: 0px 15px 15px -10px #00000066;
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
