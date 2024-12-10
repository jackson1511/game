<template>
  <StickyHeader>
    <template #back-icon>
      <a-button type="text" @click="router.push('/profile')">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a-button>
    </template>
    <template #title>Log into Device </template>
  </StickyHeader>

  <div style="background: #ececec; padding:10px 20px; width: 100%">
    <a-card :bordered="false">
      <div class="flex items-center justify-center w-full mb-3">
        <img src="/src/assets/images/1587658021342101506.avif" shape="square" width="140px" />
      </div>

      <div class="flex justify-around item-center mb-3">
        <div class="text-xs">ID : 283923829 <ion-icon name="copy-outline"></ion-icon></div>
        <div class="text-xs">Account : mgmg</div>
      </div>
    </a-card>
  </div>
  <div style="background: #ececec; padding:10px 20px; width: 100%">
    <a-card :bordered="false" title="Current Device">
      <div class="flex w-full">
        <div class="icon w-10">
          <ion-icon name="phone-portrait-outline" size="large"></ion-icon>
        </div>
        <div class="flex flex-col w-full space-y-3">
          <div class="flex space-x-4">
            <div class="text-xs w-1/2 text-end">APP</div>
            <div class="text-xs w-1/2 text-start">vue</div>
          </div>

          <div class="flex space-x-4">
            <div class="text-xs w-1/2 text-end">Version</div>
            <div class="text-xs w-1/2 text-start">v4.2.119</div>
          </div>

          <div class="flex space-x-4">
            <div class="text-xs w-1/2 text-end">Device Type</div>
            <div class="text-xs w-1/2 text-start">Chrome 01.382938.3929</div>
          </div>


          <div class="flex space-x-4">
            <div class="text-xs w-1/2 text-end">System</div>
            <div class="text-xs w-1/2 text-start">MacOS</div>
          </div>

          <div class="flex space-x-4">
            <div class="text-xs w-1/2 text-end">IP Region</div>
            <div class="text-xs w-1/2 text-start">2a09:bac5:46f6:16d2::246:80 <br/> Cambodia/Phnom Penh-Phnom Penh</div>
          </div>

          <div class="flex space-x-4">
            <div class="text-xs w-1/2 text-end">Login time</div>
            <div class="text-xs w-1/2 text-start">UTC+8 2024-12-06 14:59:22</div>
          </div>

        </div>
      </div>


    </a-card>
  </div>
</template>
<script setup lang="ts">
import StickyHeader from './StickyHeader.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
