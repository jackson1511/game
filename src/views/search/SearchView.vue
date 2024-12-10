<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  LeftOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
} from '@ant-design/icons-vue'
import GameTabs from '@/components/common/GameTabs.vue'

const router = useRouter()
const searchQuery = ref('')
const activeTab = ref('search')
const searchHistory = ref<string[]>([])
const favoriteGames = ref<Set<number>>(new Set())

const onBack = () => {
  router.back()
}

const clearSearch = () => {
  searchQuery.value = ''
}

const onSearch = (value: string) => {
  const trimmedValue = value.trim()
  if (trimmedValue) {
    if (!searchHistory.value.includes(trimmedValue)) {
      searchHistory.value.unshift(trimmedValue)
      if (searchHistory.value.length > 10) {
        searchHistory.value.pop()
      }
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
    } else {
      const index = searchHistory.value.indexOf(trimmedValue)
      searchHistory.value.splice(index, 1)
      searchHistory.value.unshift(trimmedValue)
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
    }
  }
}

const removeHistoryItem = (index: number) => {
  searchHistory.value.splice(index, 1)
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
}

const clearHistory = () => {
  searchHistory.value = []
  localStorage.setItem('searchHistory', JSON.stringify([]))
}

const handleSearch = (e: Event) => {
  if (e instanceof KeyboardEvent && e.key === 'Enter') {
    onSearch(searchQuery.value)
  }
}

const games = ref([
  {
    id: 1,
    title: 'Slot',
    image: 'https://cdntoos.hwylaws.com/game_pictures/p/150/CL/hot/200/3/default_USDT.avif',
    provider: 'WG',
    isHot: true,
  },
  {
    id: 3,
    title: 'Block Chain',
    image: 'https://cdntoos.hwylaws.cc/game_pictures/p/150/CL/hot/13/11/default_USDT.avif',
    provider: 'PG',
    isHot: true,
  },
])

const filteredGames = computed(() => {
  if (!searchQuery.value) return []
  return games.value.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const toggleFavorite = ({ id, isFavorite }: { id: number; isFavorite: boolean }) => {
  if (isFavorite) {
    favoriteGames.value.add(id)
  } else {
    favoriteGames.value.delete(id)
  }
  localStorage.setItem('favoriteGames', JSON.stringify([...favoriteGames.value]))
}

onMounted(() => {
  const savedHistory = localStorage.getItem('searchHistory')
  if (savedHistory) {
    searchHistory.value = JSON.parse(savedHistory)
  }
  const savedFavorites = localStorage.getItem('favoriteGames')
  if (savedFavorites) {
    favoriteGames.value = new Set(JSON.parse(savedFavorites))
  }
})

const displayedGames = computed(() => {
  switch (activeTab.value) {
    case 'search':
      return filteredGames.value
    case 'hot':
      return games.value.filter((game) => game.isHot)
    case 'recent':
      return games.value.slice(0, 4)
    case 'favorites':
      return games.value.filter((game) => favoriteGames.value.has(game.id))
    default:
      return games.value
  }
})
</script>

<template>
  <div class="flex flex-col h-screen bg-white">
    <!-- Header -->
    <div class="flex items-center px-4 py-4 border-b border-gray-100">
      <LeftOutlined class="text-xl mr-3 cursor-pointer" @click="onBack" />
      <span class="text-lg font-medium text-center flex-1">Search</span>
    </div>

    <!-- Search Input -->
    <div class="px-4 py-2 bg-white">
      <a-input-search
        v-model:value="searchQuery"
        placeholder="Search"
        class="search-input"
        @search="onSearch"
        @keyup.enter="handleSearch"
        :bordered="false"
      >
        <template #suffix>
          <CloseCircleOutlined v-if="searchQuery" @click="clearSearch" class="text-gray-400" />
        </template>
      </a-input-search>
    </div>

    <!-- Search History -->
    <div v-if="searchHistory.length" class="px-4 py-2">
      <div class="flex justify-between items-center mb-3 text-gray-600">
        <div class="flex items-center gap-2">
          <ClockCircleOutlined />
          <span>History</span>
        </div>
        <div class="flex items-center gap-1 text-red-500 cursor-pointer" @click="clearHistory">
          <DeleteOutlined />
          <span>Delete All</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(item, index) in searchHistory"
          :key="index"
          class="flex items-center bg-gray-100 px-3 py-1 rounded-full cursor-pointer"
        >
          <span
            class="mr-1"
            @click="
              () => {
                searchQuery = item
                onSearch(item)
              }
            "
          >
            {{ item }}
          </span>
          <CloseCircleOutlined
            @click="removeHistoryItem(index)"
            class="text-gray-400 hover:text-gray-600"
          />
        </div>
      </div>
    </div>

    <!-- Tabs Navigation -->
    <GameTabs
      v-model:activeTab="activeTab"
      :showIcons="true"
      :games="displayedGames"
      :searchQuery="searchQuery"
      :favoriteGames="favoriteGames"
      :cardWidth="'w-1/4'"
      @toggle-favorite="toggleFavorite"
    />
  </div>
</template>

<style scoped>
.search-input {
  background: #f5f5f5;
  border-radius: 20px;
}

.search-input :deep(.ant-input) {
  background: #f5f5f5;
}

:deep(.ant-tabs-nav) {
  margin-bottom: 0;
}

:deep(.ant-tabs-tab) {
  padding: 12px 16px;
}

:deep(.ant-tabs-tab-active) {
  font-weight: 500;
}
</style>
