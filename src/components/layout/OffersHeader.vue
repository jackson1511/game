<script setup lang="ts">
import {
  SearchOutlined,
  CustomerServiceOutlined,
  CopyOutlined,
  CrownOutlined,
  MobileOutlined,
  AppstoreOutlined,
  SyncOutlined,
} from '@ant-design/icons-vue'

import HeaderSlider from '../home/HeaderSlider.vue'
import AnnouncementBar from '../home/AnnouncementBar.vue'
</script>

<template>
  <div class="header">
    <div class="logo">
      <img
        src="https://cdntoos.hwylaws.com/siteadmin/upload/img/1587658021342101506.avif"
        alt="Logo"
      />
    </div>
    <div class="top-actions">
      <div class="search">
        <SearchOutlined />
        <span>Search</span>
      </div>
      <div class="music">
        <CustomerServiceOutlined />
        <span>Music</span>
      </div>
    </div>
  </div>
  <HeaderSlider />
  <AnnouncementBar />
  <div class="sub-header">
    <div class="user-info-container">
      <div class="user-info">
        <div class="vip-badge">VIP 1</div>
        <div class="copy-btn">hataclub <CopyOutlined /></div>
      </div>
      <div class="balance">
        <span class="currency">₮</span>
        <span class="amount">0.00</span>
        <SyncOutlined class="refresh" />
      </div>
    </div>
    <div class="action-buttons">
      <div class="action-item">
        <CustomerServiceOutlined />
        <span>Support</span>
      </div>
      <div class="action-item">
        <CrownOutlined />
        <span>VIP</span>
      </div>
      <div class="action-item">
        <MobileOutlined />
        <span>APP <br />Download</span>
      </div>
      <div class="action-item">
        <AppstoreOutlined />
        <span>More</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  background: #ffd700;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 12px;
}

.balance {
  margin: 8px 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
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
  color: #65b687;
  font-size: 12px;
}
</style>
