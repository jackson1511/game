<template>
  <div class="app-layout">
    <TheHeader v-if="isHomePage" />
    <div class="main-container">
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <div v-if="showFooter" class="footer-container">
      <TheFooter v-if="showFooter" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/components/layout/TheFooter.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const showFooter = computed(() => !route.meta.noLayout)
const isHomePage = computed(() => route.path === '/')
</script>

<style scoped>
.app-layout {
  width: 100%;
  max-width: 530px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f8f8f8;
}

.main-container {
  flex: 1;
  position: relative;
}

.footer-container {
  position: sticky;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 10;
}

.content {
  min-height: 100%;
}
</style>
