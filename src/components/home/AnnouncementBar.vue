<script setup lang="ts">
import { SoundOutlined } from '@ant-design/icons-vue'

const announcement =
  'Support Huiwang APP to place orders, 0 handling fees, convenient operation, and security guaranteed'
</script>

<template>
  <div class="announcement-bar">
    <div class="left-icons">
      <SoundOutlined />
      <div class="text-scroll">
        <span class="scrolling-text">{{ announcement }}</span>
      </div>
    </div>
    <router-link :to="{ path: '/message-center', query: { tab: 3 } }">
      <a-image src="/public/icons/mail.avif" :width="35" :preview="false" />
    </router-link>
  </div>
</template>

<style scoped>
.announcement-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: white;
  color: #666;
  border-bottom: 1px solid #eee;
}

.left-icons {
  width: 80%;
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.text-scroll {
  overflow: hidden;
  width: 80%;
}

.scrolling-text {
  display: inline-block;
  white-space: nowrap;
  animation: scrollText 20s linear infinite;
}

@keyframes scrollText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.mail-icon {
  color: #65b687;
}
</style>
