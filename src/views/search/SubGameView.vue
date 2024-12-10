<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { LeftOutlined } from '@ant-design/icons-vue'
import SubGameCard from '../../components/subgame/SubGameCard.vue'
import SubGameTabs from '../../components/subgame/SubGameTabs.vue'

const route = useRoute()
const router = useRouter()
const searchQuery = ref('')
const activeTab = ref(searchQuery.value ? 'search' : 'all')
const currentPage = ref(1)
const pageSize = 12

const categoryType = computed(() => {
  const id = route.query.gameCategoryId
  switch (id) {
    case '1':
      return { id: 'slot', icon: '777', name: 'Slot' }
    case '2':
      return { id: 'live', icon: 'live', name: 'Live Casino' }
    case '3':
      return { id: 'blockchain', icon: 'blockchain', name: 'Blockchain' }
    default:
      return { id: 'slot', icon: '777', name: 'Slot' }
  }
})

const providers = computed(() => {
  switch (categoryType.value.id) {
    case 'slot':
      return [
        {
          id: 'PG',
          name: 'PG',
          logo: 'https://cdntoos.hwylaws.com/cocos/icon/0/310_N_JDB_LOGO.png',
        },
        {
          id: 'CQ9',
          name: 'CQ9',
          logo: 'https://cdntoos.hwylaws.com/cocos/icon/0/310_N_JDB_LOGO.png',
        },
        {
          id: 'JDB',
          name: 'JDB',
          logo: 'https://cdntoos.hwylaws.com/cocos/icon/0/310_N_JDB_LOGO.png',
        },
      ]
    case 'blockchain':
      return [
        {
          id: 'WG',
          name: 'WG',
          logo: 'https://cdntoos.hwylaws.com/cocos/icon/0/310_N_JDB_LOGO.png',
        },
      ]
    default:
      return []
  }
})

const selectedProvider = ref(route.query.provider || providers.value[0]?.id)

const games = ref([
  {
    id: 1,
    title: 'Panda King',
    image: 'https://cdntoos.hwylaws.com/game_pictures/g/CL/200/3/2000067/default.avif',
    provider: 'PG',
    isHot: true,
    isFavorite: false,
    multiplier: '800X',
  },
  {
    id: 2,
    title: 'Lucky Dragons',
    image: 'https://cdntoos.hwylaws.com/game_pictures/g/CL/200/3/2000067/default.avif',
    provider: 'CQ9',
    isHot: true,
    isFavorite: false,
    multiplier: '800X',
  },
  {
    id: 3,
    title: 'Block Chain',
    image: 'https://cdntoos.hwylaws.cc/game_pictures/p/150/CL/hot/13/11/default_USDT.avif',
    provider: 'WG',
    isHot: true,
    isFavorite: false,
    multiplier: '800X',
  },
  ...Array.from({ length: 100 }, (_, index) => ({
    id: index + 4,
    title: `Game ${index + 4}`,
    image: `https://cdntoos.hwylaws.com/game_pictures/g/CL/200/3/2000067/default.avif`,
    provider: 'JDB',
    isHot: index % 2 === 0,
    isFavorite: false,
  })),
])

const filteredGames = computed(() => {
  let filtered = [...games.value]
  filtered = filtered.filter((game) => game.provider === selectedProvider.value)

  if (activeTab.value === 'hot') {
    filtered = filtered.filter((game) => game.isHot)
  } else if (activeTab.value === 'fav') {
    filtered = filtered.filter((game) => game.isFavorite)
  }

  if (searchQuery.value) {
    filtered = filtered.filter((game) =>
      game.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  }

  return filtered
})

const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredGames.value.slice(start, start + pageSize)
})

const totalPages = computed(() => Math.ceil(filteredGames.value.length / pageSize))

const onBack = () => {
  router.back()
}

const toggleFavorite = ({ id, isFavorite }: { id: number; isFavorite: boolean }) => {
  const game = games.value.find((g) => g.id === id)
  if (game) {
    game.isFavorite = isFavorite
  }
}

const selectProvider = (providerId: string) => {
  selectedProvider.value = providerId
  currentPage.value = 1
}

watch(searchQuery, (newValue) => {
  if (!newValue && activeTab.value === 'search') {
    activeTab.value = 'all'
  }
})
</script>

<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Header -->
    <div class="flex items-center px-4 py-4 bg-white border-b">
      <LeftOutlined class="text-xl mr-3 cursor-pointer" @click="onBack" />
      <span class="text-lg font-medium">{{ categoryType.name }}</span>
    </div>

    <div class="bg-white px-4 py-3">
      <a-input-search
        v-model:value="searchQuery"
        placeholder="Search games..."
        class="!rounded-full"
        :bordered="false"
        :style="{ background: '#f5f5f5' }"
      />
    </div>

    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <div class="w-32 bg-white flex-shrink-0 overflow-y-auto pl-4">
        <div
          v-for="provider in providers"
          :key="provider.id"
          class="p-1 cursor-pointer rounded-lg mb-2"
          :class="selectedProvider === provider.id ? 'bg-[#35BB92]' : 'bg-[#EBF8F6]'"
          @click="selectProvider(provider.id)"
        >
          <div class="flex flex-col items-center">
            <img :src="provider.logo" :alt="provider.name" class="w-9 h-9" />
            <span
              class="text-sm mt-1"
              :class="selectedProvider === provider.id ? 'text-white' : 'text-gray-600'"
              >{{ provider.name }}</span
            >
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <SubGameTabs v-model:activeTab="activeTab" :searchQuery="searchQuery" />
        <div class="flex-1 overflow-y-auto p-4 bg-white">
          <div v-if="paginatedGames.length" class="grid grid-cols-3 gap-2">
            <SubGameCard
              v-for="game in paginatedGames"
              :key="game.id"
              :game="game"
              @toggle-favorite="toggleFavorite"
            />
          </div>
          <div v-else class="flex justify-center items-center h-full">
            <a-empty description="No games found" />
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex justify-center mt-4 pb-4">
            <a-pagination
              v-model:current="currentPage"
              :total="filteredGames.length"
              :pageSize="pageSize"
              showLessItems
              :showSizeChanger="false"
              class="custom-pagination"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.ant-input-search .ant-input) {
  background: #f5f5f5;
}
:deep(.ant-input-search .ant-input-group-addon) {
  background: #f5f5f5;
}

:deep(.custom-pagination) {
  .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-item {
    border-radius: 8px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: 0 4px;

    button,
    a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    background-color: #f5f5f5;
    border: none;
  }

  .ant-pagination-item-active {
    background-color: #35bb92;
    border-color: #35bb92;

    a {
      color: white;
    }
  }

  .ant-pagination-disabled {
    opacity: 0.5;
  }
}
</style>
