<script setup lang="ts">
import homePageTitleIcon from '@/shared/assets/svg/home-page-title-icon.vue'
</script>
<template>
  <section class="homepage">
    <div class="homepage__container">
      <div class="homepage__content">
        <h1 class="homepage__title">Мои заметки</h1>
        <p class="homepage__description">Не забывай о важном, храни его в облаке.</p>
      </div>

      <div class="homepage__image-wrapper">
        <homePageTitleIcon alt="Иллюстрация заметок" class="homepage__image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.homepage {
  --homepage-gap: 40px;
  --homepage-title-font-size: 104px;
  --homepage-title-font-width: 488px;
  --homepage-title-line-height: 104px;
  --homepage-description-font-size: 32px;
  --homepage-description-line-height: 48px;
  --homepage-description-width: 394px;
  --homepage-text-color: #fff;
  --homepage-description-color: #9da5af;
  --homepage-cta-button-bg: #b1c909;
  --homepage-cta-button-hover-bg: #97ab0d;
  --homepage-cta-button-active-bg: #819400;
  --homepage-cta-button-text-color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.homepage__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--homepage-gap);
  max-width: 100%;
}

.homepage__content {
  display: flex;
  flex-direction: column;
  gap: var(--homepage-gap);
}

.homepage__title {
  width: var(--homepage-title-font-width);
  font-size: var(--homepage-title-font-size);
  font-weight: 900;
  line-height: var(--homepage-title-line-height);
  color: var(--homepage-text-color);
  margin: 0;
}

.homepage__description {
  font-size: var(--homepage-description-font-size);
  line-height: var(--homepage-description-line-height);
  color: var(--homepage-description-color);
  width: var(--homepage-description-width);
  margin: 0;
}

.homepage__cta-button {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 700;
  color: var(--homepage-cta-button-text-color);
  background-color: var(--homepage-cta-button-bg);
  border: none;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.homepage__cta-button:hover {
  background-color: var(--homepage-cta-button-hover-bg);
}

.homepage__cta-button:active {
  background-color: var(--homepage-cta-button-active-bg);
}

.homepage__image-wrapper {
  display: flex;
}

.homepage__image {
  width: 100%;
  object-fit: contain;
}

@media (max-width: 1200px) {
  :root {
    --homepage-padding: 80px;
    --homepage-title-font-size: 80px;
    --homepage-title-line-height: 80px;
    --homepage-description-font-size: 24px;
    --homepage-description-line-height: 36px;
    --homepage-description-width: 300px;
  }
}

@media (max-width: 768px) {
  :root {
    --homepage-padding: 40px;
    --homepage-title-font-size: 48px;
    --homepage-title-line-height: 48px;
    --homepage-description-font-size: 18px;
    --homepage-description-line-height: 24px;
    --homepage-description-width: 100%;
  }

  .homepage__container {
    flex-direction: column;
    text-align: center;
  }

  .homepage__image-wrapper {
    max-width: 80%; /* Уменьшаем ширину изображения на мобильных устройствах */
  }
}

@media (max-width: 480px) {
  :root {
    --homepage-padding: 20px;
    --homepage-title-font-size: 36px;
    --homepage-title-line-height: 36px;
    --homepage-description-font-size: 16px;
    --homepage-description-line-height: 20px;
  }

  .homepage__image-wrapper {
    max-width: 100%; /* На очень маленьких экранах занимает всю ширину */
  }
}
</style>
