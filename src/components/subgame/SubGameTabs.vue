<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  activeTab: string
  searchQuery: string
  showSearchTab?: boolean
}>()

const emit = defineEmits(['update:activeTab'])

const tabs = computed(() => [
  { id: 'all', label: props.searchQuery ? 'Search' : 'All' },
  { id: 'hot', label: 'Hot', icon: '🔥' },
  { id: 'recent', label: 'Recent', icon: '🕒' },
  { id: 'fav', label: 'Fav', icon: '⭐' },
])
</script>

<template>
  <div class="bg-white">
    <div class="flex px-4 overflow-x-auto hide-scrollbar">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="px-4 py-3 cursor-pointer whitespace-nowrap"
        :class="{ 'text-green-600 border-b-2 border-green-600': activeTab === tab.id }"
        @click="emit('update:activeTab', tab.id)"
      >
        <span class="flex items-center gap-1">
          <span v-if="tab.icon">{{ tab.icon }}</span>
          <span>{{ tab.label }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
