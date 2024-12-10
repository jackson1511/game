<template>
  <StickyHeader>
    <template #back-icon>
      <a-button type="text" @click="$router.go(-1)">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a-button>
    </template>
    <template #title>
      <div class="overflow-x-scroll scrollbar-hide">
      <div class="flex h-4 w-full bg-red-500">
         <div class="flex-1">Request Withdraw</div>
         <div class="flex-1">Request Withdraw</div>
         <div class="flex-1">Request Withdraw</div>
         <div class="flex-1">Request Withdraw</div>
         <div class="flex-1">Request Withdraw</div>
      </div>
    </div>

    </template>
    <template #action>
      <ion-icon name="headset-outline" size="large"></ion-icon>
    </template>
  </StickyHeader>
  <h3>Withdraw me</h3>
</template>
<script setup lang="ts">

import StickyHeader from './components/StickyHeader.vue';
import { ref } from 'vue';
const activeKey = ref('1');
</script>

<style scoped>
</style>
