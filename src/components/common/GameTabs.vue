<script setup lang="ts">
import { SearchOutlined } from '@ant-design/icons-vue'
import SearchGameCard from '@/components/search/SearchGameCard.vue'
interface Game {
  id: number
  title: string
  image: string
  provider: string
  isHot?: boolean
}

interface Props {
  activeTab: string
  showIcons?: boolean
  games: Game[]
  searchQuery?: string
  favoriteGames?: Set<number>
  cardWidth: string
}

interface Emits {
  (e: 'update:activeTab', value: string): void
  (e: 'toggle-favorite', value: { id: number; isFavorite: boolean }): void
}

withDefaults(defineProps<Props>(), {
  showIcons: false,
  searchQuery: '',
  favoriteGames: () => new Set(),
  cardWidth: 'w-1/4',
})

const emit = defineEmits<Emits>()

const updateActiveTab = (tab: string) => {
  emit('update:activeTab', tab)
}

const toggleFavorite = (payload: { id: number; isFavorite: boolean }) => {
  emit('toggle-favorite', payload)
}
</script>

<template>
  <div>
    <!-- Tabs Navigation -->
    <div class="border-b border-gray-100">
      <a-tabs :activeKey="activeTab" @update:activeKey="updateActiveTab" :centered="!showIcons">
        <a-tab-pane v-if="showIcons" key="search">
          <template #tab>
            <span class="flex items-center gap-1">
              <SearchOutlined />
              <span>Search</span>
            </span>
          </template>
        </a-tab-pane>
        <a-tab-pane key="hot">
          <template #tab>
            <span class="flex items-center gap-1">
              <span v-if="showIcons">🔥</span>
              <span>Hot</span>
            </span>
          </template>
        </a-tab-pane>
        <a-tab-pane key="recent">
          <template #tab>
            <span class="flex items-center gap-1">
              <span v-if="showIcons">🕒</span>
              <span>Recent</span>
            </span>
          </template>
        </a-tab-pane>
        <a-tab-pane key="favorites">
          <template #tab>
            <span class="flex items-center gap-1">
              <span v-if="showIcons">⭐</span>
              <span>Favorites</span>
            </span>
          </template>
        </a-tab-pane>
      </a-tabs>
    </div>

    <!-- Content Area -->
    <div class="flex-1 overflow-y-auto">
      <template v-if="activeTab === 'search'">
        <template v-if="searchQuery">
          <div class="flex flex-wrap" v-if="games.length">
            <SearchGameCard
              v-for="game in games"
              :key="game.id"
              :game="{
                ...game,
                isFavorite: favoriteGames.has(game.id),
                categoryId: game.id,
                platformId: 200,
              }"
              :class="cardWidth"
              @toggle-favorite="toggleFavorite"
            />
          </div>
          <a-empty v-else description="No games available" class="py-8" />
        </template>
        <a-empty v-else description="Search for games" class="py-8" />
      </template>
      <template v-else-if="activeTab === 'favorites'">
        <div class="flex flex-wrap">
          <SearchGameCard
            v-for="game in games.filter((game) => favoriteGames.has(game.id))"
            :key="game.id"
            :game="{
              ...game,
              isFavorite: true,
              categoryId: game.id,
              platformId: 200,
            }"
            :class="cardWidth"
            @toggle-favorite="toggleFavorite"
          />
        </div>
      </template>
      <template v-else>
        <div class="flex flex-wrap">
          <SearchGameCard
            v-for="game in games"
            :key="game.id"
            :game="{
              ...game,
              isFavorite: favoriteGames.has(game.id),
              categoryId: game.id,
              platformId: 200,
            }"
            :class="cardWidth"
            @toggle-favorite="toggleFavorite"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
:deep(.ant-tabs-nav) {
  margin-bottom: 0;
}

:deep(.ant-tabs-tab) {
  padding: 12px 16px;
}

:deep(.ant-tabs-tab-active) {
  font-weight: 500;
}

/* Add these new styles for tab colors */
:deep(.ant-tabs-tab-btn) {
  color: #666 !important;
  font-size: 16px;
}

:deep(.ant-tabs-tab-btn:hover) {
  color: #666 !important;
}

:deep(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: #26a17b !important;
}

:deep(.ant-tabs-ink-bar) {
  background: #26a17b !important;
}
</style>
