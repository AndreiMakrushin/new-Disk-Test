<script setup lang="ts">
import { ref, watch } from 'vue'
import { useNoteStore } from '@/stores'
import ButtonForm from '@/shared/ui/button-form'
import { logout } from '@/composables/logout'
import signInIcon from '@/shared/assets/svg/sign-in-icon.vue'
import logoIcon from '@/shared/assets/svg/logo-icon.vue'
import userIcon from '@/shared/assets/svg/user-icon.vue'
import logoIconMobile from '@/shared/assets/svg/logo-icon-mobile.vue'

const noteStore = useNoteStore()

const isHovered = ref(false)
let timeoutId: number | null = null

const handleMouseEnter = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  isHovered.value = true
}

const handleMouseLeave = () => {
  timeoutId = setTimeout(() => {
    isHovered.value = false
  }, 600)
}

const logoutUser = () => {
  logout()
  noteStore.userData = null
}
watch(
  () => noteStore.userData,
  (newUserData) => {
    if (newUserData) {
      isHovered.value = false
    }
  },
)
</script>

<template>
  <header class="app-header">
    <logoIcon alt="Логотип приложения" class="app-header__logo" />
    <logoIconMobile alt="Логотип приложения" class="app-header__logo-mobile" />

    <nav class="app-header__nav">
      <ButtonForm
        v-if="!noteStore.userData"
        @click="noteStore.openAuthModal"
        title="Вход"
        aria-label="Войти в систему"
        ><signInIcon
      /></ButtonForm>
      <div v-else class="user-email">
        <span class="user-email__text">{{ noteStore.userData.email }}</span>

        <userIcon
          class="user-email__icon"
          src="@/shared/assets/svg/user.svg"
          alt="Иконка пользователя"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        />

        <div
          class="user-email__logout"
          @click="logoutUser"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          v-if="isHovered"
        >
          <span>Выйти</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
}
@media screen and (max-width: 1366px) {
  .app-header {
    padding: 20px 0;
  }
}

@media screen and (max-width: 500px) {
  .app-header__logo {
    display: none;
  }
}
.app-header__logo-mobile {
  display: none;
}

@media screen and (max-width: 500px) {
  .app-header__logo-mobile {
    display: block;
  }
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-email {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-email__text {
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  color: #ffffff;
}

@media screen and (max-width: 500px) {
  .user-email__text {
    width: 100px;
  }
}

.user-email__icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.user-email__logout {
  position: absolute;
  top: 115%;
  right: 0;
  padding: 40px;
  background: #1b2f46;
  border-radius: 12px;
  box-shadow: 0px 15px 46px -10px #00000099;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  color: #b1c909;
  margin-top: 10px;
}

.user-email__logout::before {
  content: '';
  position: absolute;
  bottom: 100%;
  right: 20px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #1b2f46;
}
</style>
