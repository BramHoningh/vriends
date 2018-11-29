<style src="./Hero.scss" lang="scss" scoped></style>
<script src="./Hero.js"></script>

<template>
  <div class="hero">
    <div class="hero-button">
      <a href="#">Download Vriends on the App Store</a>
    </div>

    <div class="hero-inner">
      <div class="hero--image">
        <Icon
          name="logo"
        />
      </div>

      <div class="hero--content">
        <h1>{{ $t('hero.title') }}</h1>
        <p>{{ $t('hero.description') }}</p>
      </div>
    </div>

    <div class="indicator" />
  </div>
</template>
