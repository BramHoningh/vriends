<style src="./Hero.scss" lang="scss" scoped></style>
<script src="./Hero.js"></script>

<template>
  <div class="hero">
    <div class="hero-inner">
      <div class="hero--image">
        <img src="../../assets/images/vriends-logo.png"
             alt="Vriends Logo">
      </div>

      <div class="hero--content">
        <h1>{{ $t('hero.title') }}</h1>
        <p>{{ $t('hero.description') }}</p>
      </div>
    </div>
  </div>
</template>
