<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const banners = [
  {
    id: 1,
    image: 'https://cdntoos.hwylaws.com/siteadmin/upload/img/1845881611307593729.avif',
  },
  {
    id: 2,
    image: 'https://cdntoos.hwylaws.com/siteadmin/upload/img/1845881611307593729.avif',
  },
]
</script>

<template>
  <div class="header-slider">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true }"
      class="banner-swiper"
    >
      <SwiperSlide v-for="banner in banners" :key="banner.id">
        <img :src="banner.image" alt="Banner" class="banner-img" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.header-slider {
  padding: 12px;
  background: #fff;
}

.banner-swiper {
  border-radius: 8px;
  overflow: hidden;
  height: 140px;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-pagination-bullet) {
  background: #fff;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background: #fff;
  opacity: 1;
}
</style>
