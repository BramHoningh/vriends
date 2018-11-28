<style src="./Home.scss" lang="scss" scoped></style>
<script src="./Home.js"></script>

<template>
  <div class="home">
    <hero />
    <card
      v-for="(card, index) in $t('cards')"
      :key="index"
      :align="card.align"
      :image="card.image"
      :color="card.color"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>
