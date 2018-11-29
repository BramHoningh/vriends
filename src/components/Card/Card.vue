<style src="./Card.scss" lang="scss" scoped></style>
<script src="./Card.js"></script>

<template>
  <div
    :class="`card-color--${color}`"
    class="card"
  >
    <div
      class="card-inner"
      :class="`card-align--${align}`"
    >
      <div class="card--image">
        <!--<img :src="getImageSrc(image)" alt="">-->
        <Icon
          :name="image"
        />
      </div>

      <div class="card--content">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>
