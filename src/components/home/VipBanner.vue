<template>
  <div class="vip-banner">
    <img
      src="https://cdntoos.hwylaws.com/siteadmin/upload/img/1587658021342101506.avif"
      alt="VIP Banner"
      class="banner-img"
    />
    <div class="banner-content">
      <h2>全新VIP 尊享奢华</h2>
      <div class="vip-features">
        <span>晋级礼金</span>
        <span>周俸禄</span>
        <span>月俸禄</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vip-banner {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
}

.banner-img {
  width: 100%;
  height: auto;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: white;
}

.vip-features {
  display: flex;
  gap: 16px;
  margin-top: 8px;
  font-size: 14px;
}
</style>
