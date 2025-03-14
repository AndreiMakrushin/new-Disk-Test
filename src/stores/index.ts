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

  const getAllNotes = async () => {
    const notes = await getNotes()
    noteList.value = notes
  }

  const goNotePage = async () => {
    const user = await useSignIn()

    if (user) {
      userData.value = user
      await getAllNotes()
    }
  }

  onMounted(async () => {
    await goNotePage()
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
    getAllNotes,
    goNotePage,
    noteList,
    userData,
    error,
  }
})
