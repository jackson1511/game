<template>
    <StickyHeader>
    <template #back-icon>
      <a-button type="link" @click="$router.go(-1)">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a-button>
    </template>
    <template #title> Login Password </template>
  </StickyHeader>
  <h2>Change Login Password Verify</h2>
</template>
<script lang="ts" setup>
import StickyHeader from '../StickyHeader.vue';
</script>
