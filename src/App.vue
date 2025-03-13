<script setup lang="ts">
import AppHeader from './widgets/app-header'
import AppAuthModal from './widgets/app-auth-modal'
import CreateNoteModal from './widgets/create-note-modal'
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppAuthModal />
  <CreateNoteModal />
</template>

<style scoped></style>
