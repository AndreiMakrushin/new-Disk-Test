import { ref, onMounted, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { getNotes } from '@/composables/getNotes'
import type { INoteList } from '@/shared/types'
import { useSignIn } from '@/composables/useSignIn'

export const useNoteStore = defineStore('note', () => {
  const error = ref<string | null>(null)
  const isAddNoteModalVisible = ref(false)
  const isAuthModal = ref(false)
  const userData = ref<{ id: number; email: string } | null>(null)
  const router = useRouter()
  const noteList = ref<INoteList[]>([])

  const openAddNoteModal = (): void => {
    isAddNoteModalVisible.value = true
  }
  const closeAddNoteModal = (): void => {
    isAddNoteModalVisible.value = false
  }
  const openAuthModal = (): void => {
    isAuthModal.value = true
  }
  const closeAuthModal = (): void => {
    isAuthModal.value = false
  }

  onMounted(async () => {
    await useSignIn()
    await getNotes()
  })
  watchEffect(() => {
    if (!userData.value) {
      router.push('/')
    } else {
      router.push('/note')
    }
  })

  return {
    isAddNoteModalVisible,
    openAuthModal,
    closeAuthModal,
    isAuthModal,
    openAddNoteModal,
    closeAddNoteModal,
    noteList,
    userData,
    error,
  }
})
