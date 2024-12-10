<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { ref } from 'vue'

const route = useRoute()
const transitionName = ref('slide-right')
</script>

<template>
  <div class="app-wrapper">
    <div class="content-container">
      <transition :name="transitionName">
        <component :is="DefaultLayout" :key="route.path">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </component>
      </transition>
    </div>
  </div>
</template>

<style>
.app-wrapper {
  display: flex;
  justify-content: center;
  background: #E3E3E3;
  min-height: 100vh;
  width: 100%;
}

.content-container {
  width: 100%;
  max-width: 530px;
  position: relative;
}

/* Transition styles */
.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-enter-to,
.slide-right-enter-to,
.slide-left-leave-from,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
