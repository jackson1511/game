<template>
  <StickyHeader>
  <template #back-icon>
    <a-button type="text" @click="$router.go(-1)">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </a-button>
  </template>
  <template #title> Email </template>
</StickyHeader>
<h2>Link to Email</h2>
</template>
<script lang="ts" setup>
import StickyHeader from '../StickyHeader.vue';
</script>
