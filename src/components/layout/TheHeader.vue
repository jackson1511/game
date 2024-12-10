<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import MusicPlayer from '../music/MusicPlayer.vue'
const router = useRouter()

const showMusicPlayer = ref(false)

const goToSearch = () => {
  router.push('/search')
}

const openMusicPlayer = () => {
  showMusicPlayer.value = true
}
</script>

<template>
  <div class="main-header">
    <div class="header">
      <div class="logo">
        <a-image src="/public/icons/logo.avif" :width="150" :preview="false" />
      </div>
      <div class="top-actions">
        <div class="search action-item cursor-pointer" @click="goToSearch">
          <a-image src="/public/icons/search.avif" :width="40" :preview="false" />
          <span>Search</span>
        </div>
        <div class="music action-item cursor-pointer" @click="openMusicPlayer">
          <a-image src="/public/icons/music.avif" :width="40" :preview="false" />
          <span>Music</span>
        </div>
      </div>
    </div>
  </div>
  <MusicPlayer v-model:open="showMusicPlayer" />
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 530px;
  z-index: 100;
  background: white;
}

.header {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.logo img {
  height: 32px;
}

.top-actions {
  display: flex;
  gap: 20px;
  color: #65b687;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  font-size: 14px;
  gap: 4px;
}
</style>
