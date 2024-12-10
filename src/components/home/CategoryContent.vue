<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  category: string
}>()

const categoryConfig = {
  slot: {
    title: 'Slot',
    banners: [
      {
        logo: 'PG',
        name: 'PG Slots',
        image: 'https://cdntoos.hwylaws.com/game_pictures/p/150/L1/200/3/default_USDT.avif',
      },
      {
        logo: 'CQ9',
        name: 'CQ9 Slots',
        image: 'https://cdntoos.hwylaws.com/game_pictures/p/150/L1/200/3/default_USDT.avif',
      },
    ],
  },
  live: {
    title: 'Live Casino',
    banners: [
      {
        logo: 'BBIN',
        name: 'BBIN Live',
        image: 'https://cdntoos.hwylaws.cc/game_pictures/p/150/L1/75/4/default_USDT.avif',
      },
      {
        logo: 'BG',
        name: 'BG Live',
        image: 'https://cdntoos.hwylaws.cc/game_pictures/p/150/L1/75/4/default_USDT.avif',
      },
    ],
  },
  fishing: {
    title: 'Fishing Games',
    banners: [
      {
        logo: 'BBIN',
        name: 'BBIN Live',
        image: 'https://cdntoos.hwylaws.cc/game_pictures/p/150/L1/21/2/default_USDT.avif',
      },
    ],
  },
  cards: {
    title: 'Cards Games',
    banners: [
      {
        logo: 'BBIN',
        name: 'BBIN Live',
        image: 'https://cdntoos.hwylaws.cc/game_pictures/p/150/L1/13/1/default_USDT.avif',
      },
    ],
  },
  lottery: {
    title: 'Lottery Games',
    banners: [
      {
        logo: 'BBIN',
        name: 'BBIN Live',
        image: 'https://cdntoos.hwylaws.cc/game_pictures/p/150/L1/75/8/default_USDT.avif',
      },
    ],
  },
  blockchain: {
    title: 'Blockchain Games',
    banners: [
      {
        logo: 'BBIN',
        name: 'BBIN Live',
        image: 'https://cdntoos.hwylaws.cc/game_pictures/p/150/L1/13/11/default_USDT.avif',
      },
    ],
  },
  sports: {
    title: 'Sports Games',
    banners: [
      {
        logo: 'BBIN',
        name: 'BBIN Live',
        image: 'https://cdntoos.hwylaws.cc/game_pictures/p/150/L1/43/5/default_USDT.avif',
      },
    ],
  },
} as const

const categoryData = computed(() => categoryConfig[props.category as keyof typeof categoryConfig])
</script>

<template>
  <div class="category-content" v-if="categoryData">
    <div class="header">
      <div class="title">
        <a-image :src="`public/icons/777.avif`" :width="40" :preview="false" />
        <span>{{ categoryData.title }}</span>
      </div>
      <span class="all-link">All</span>
    </div>

    <div class="banners">
      <div
        v-for="(banner, index) in categoryData.banners"
        :key="index"
        class="banner"
        :style="{
          backgroundImage: `url(${banner.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="banner-info">
          <div class="name">{{ banner.name }}</div>
        </div>
      </div>
    </div>

    <div class="games-info">Currently displaying 6 {{ categoryData.title }} games out of 11</div>

    <div class="load-more">Load More ⌄</div>
    <a-divider />
  </div>
</template>

<style scoped>
.category-content {
  padding: 12px;
  background: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
}

.all-link {
  color: #666;
}

.banners {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.banner {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 145px;
  background: #8b4513;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-info {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: white;
}

.name {
  font-size: 24px;
  position: relative;
  top: 15px;
  left: 30px;
}

.games-info {
  text-align: center;
  color: #666;
  margin: 16px 0;
  font-size: 14px;
}

.load-more {
  text-align: center;
  color: #666;
  cursor: pointer;
  padding: 8px;
}
</style>
