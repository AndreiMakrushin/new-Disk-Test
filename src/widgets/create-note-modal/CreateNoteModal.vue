<script setup lang="ts">
import { reactive } from 'vue'
import { getNotes } from '@/composables/getNotes'
import type { INoteForm } from './types'
import ModalLayout from '@/shared/ui/modal-layout'
import InputForm from '@/shared/ui/input-form/InputForm.vue'
import InputTextarea from '@/shared/ui/input-textarea-form/InputTextarea.vue'
import ButtonForm from '@/shared/ui/button-form'
import { useNoteStore } from '@/stores'
import { createNote } from './composables/createNote'
import { useValidateForm } from './composables/useValidateNote'

const noteStore = useNoteStore()

const noteForm: INoteForm = reactive({
  title: '',
  content: '',
})

const clearForm = () => {
  noteForm.title = ''
  noteForm.content = ''
}
const addNote = async (noteForm: INoteForm) => {
  const validationError = useValidateForm(noteForm)

  if (validationError) {
    noteStore.error = validationError
    return
  }

  noteStore.error = null
  const result = await createNote(noteForm)

  if (result) {
    const notes = await getNotes()
    noteStore.noteList = notes
    noteStore.closeAddNoteModal()
    clearForm()
  }
}
</script>

<template>
  <ModalLayout
    :error="noteStore.error"
    v-if="noteStore.isAddNoteModalVisible"
    @close="noteStore.closeAddNoteModal"
  >
    <header class="modal-header">
      <h2 class="modal-title">Добавление заметки</h2>
    </header>

    <form class="note-form">
      <InputForm
        v-model:input="noteForm.title"
        :count="100"
        label="Название заметки"
        type="text"
        placeholder="Введите название"
      />
      <InputTextarea
        v-model:input="noteForm.content"
        :count="500"
        placeholder="Введите текст"
        label="Текст заметки"
      />
      <footer class="form-footer">
        <ButtonForm @click.prevent="addNote(noteForm)" type="submit" title="Добавить" />
      </footer>
    </form>
  </ModalLayout>
</template>

<style scoped>
.modal-title {
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  color: #fff;
}

.note-form {
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-footer {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
