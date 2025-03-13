<template>
  <section class="homepage">
    <div class="homepage__container">
      <div class="homepage__content">
        <h1 class="homepage__title">Мои заметки</h1>
        <p class="homepage__description">Не забывай о важном, храни его в облаке.</p>
      </div>

      <div class="homepage__image-wrapper">
        <img
          src="@/shared/assets/image/home-image.png"
          alt="Иллюстрация заметок"
          class="homepage__image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.homepage {
  width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.homepage__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  gap: 40px;
  max-width: 100%;
}

@media screen and (max-width: 1366px) {
  .homepage__container {
    padding: 40px 0px 0 0px;
  }
}
@media screen and (max-width: 768px) {
  .homepage__container {
    padding: 20px 0px 0 0px;
  }
}

.homepage__content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.homepage__title {
  font-size: 104px;
  font-weight: 900;
  line-height: 104px;
  color: #fff;
  margin: 0;
}

@media screen and (max-width: 500px) {
  .homepage__title {
    white-space: normal;
    font-size: 60px;
    line-height: 64px;
    display: block;
  }
}

.homepage__description {
  font-size: 32px;
  line-height: 48px;
  color: #9da5af;
  width: 394px;
  margin: 0;
}

.homepage__cta-button {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: #b1c909;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.homepage__cta-button:hover {
  background-color: #97ab0d;
}

.homepage__cta-button:active {
  background-color: #819400;
}

.homepage__image-wrapper {
  display: flex;
  max-width: 900px;
}

.homepage__image {
  width: 100%;
  object-fit: cover;
}

@media (max-width: 1200px) {
  .homepage__title {
    font-size: 80px;
    line-height: 80px;
  }

  .homepage__description {
    font-size: 24px;
    line-height: 36px;
    width: 300px;
  }
}

@media (max-width: 768px) {
  .homepage__container {
    flex-direction: column;
    text-align: center;
  }
  .homepage__content {
    gap: 20px;
  }
  .homepage__title {
    font-size: 60px;
    line-height: 60px;
  }

  .homepage__description {
    font-size: 24px;
    line-height: 36px;
    width: 100%;
  }

  .homepage__image-wrapper {
    max-width: 80%;
  }
}
</style>
