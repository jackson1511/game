<template>
  <sticky-header>
  <template #back-icon>
    <a-button type="text" @click="$router.go(-1)">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </a-button>
  </template>
  <template #title> Phone Number</template>
</sticky-header>
<h2>Phone Number</h2>
</template>
<script lang="ts" setup>
import StickyHeader from '../StickyHeader.vue';
</script>
