<script setup lang="ts">
import { ref } from 'vue'
import { SyncOutlined, CopyOutlined } from '@ant-design/icons-vue'
import HeaderSlider from './HeaderSlider.vue'
import AnnouncementBar from './AnnouncementBar.vue'
import AppDownloadModal from '@/components/home/AppDownloadModal.vue'

const showAppDownloadModal = ref(false)
</script>

<template>
  <div class="header-content">
    <HeaderSlider />
    <AnnouncementBar />
    <div class="sub-header">
      <div class="user-info-container">
        <div class="user-info">
          <div class="vip-badge">
            <a-image src="/public/icons/vip.avif" :width="20" :preview="false" />
            <span class="vip-level">1</span>
          </div>
          <div class="copy-btn">
            hataclub
            <CopyOutlined
              :style="{ color: '#26a17b', fontSize: '16px', transform: 'rotate(180deg)' }"
            />
          </div>
        </div>
        <div class="balance">
          <a-image src="/public/icons/usdt.avif" :width="20" :preview="false" />
          <span class="amount">0.00</span>
          <SyncOutlined :style="{ color: '#26a17b', transform: 'rotate(120deg)' }" />
        </div>
      </div>
      <div class="action-buttons">
        <a class="action-item" href="https://direct.lc.chat/17238018/" target="_blank">
          <a-image src="/public/icons/support.avif" :width="40" :preview="false" />
          <span>Support</span>
        </a>
        <router-link :to="{ path: '/offer-vip' }" class="action-item">
          <a-image src="/public/icons/v.avif" :width="40" :preview="false" />
          <span>VIP</span>
        </router-link>
        <div class="action-item cursor-pointer" @click="showAppDownloadModal = true">
          <a-image src="/public/icons/app.avif" :width="40" :preview="false" />
          <span>APP Download</span>
        </div>
        <div class="action-item more-trigger cursor-pointer" @click="$emit('openMore')">
          <a-image src="/public/icons/more.avif" :width="40" :preview="false" />
          <span>More</span>
        </div>
      </div>
    </div>
  </div>

  <AppDownloadModal v-model:open="showAppDownloadModal" />
</template>

<style scoped>
.header-content {
  width: 100%;
  margin-top: 70px;
}

.sub-header {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #fff;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.vip-badge {
  background: #c12929;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.vip-level {
  background: linear-gradient(180deg, #f7ea94 0, #e5b952 51%, #ce9510);
  color: transparent;
  background-clip: text;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #000;
  font-size: 14px;
}

.balance {
  width: 100px;
  margin: 8px 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1px solid #ffaa09;
  padding: 2px;
  border-radius: 15px;
}

.balance .amount {
  font-size: 20px;
  color: #ffaa09;
  text-decoration: underline;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  gap: 12px;
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
