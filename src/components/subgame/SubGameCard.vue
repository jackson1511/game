<script setup lang="ts">
import { ref } from 'vue'

interface GameProps {
  game: {
    id: number
    title: string
    image: string
    provider: string
    isHot?: boolean
    isFavorite?: boolean
    multiplier?: string
  }
}

const props = defineProps<GameProps>()
const emit = defineEmits(['toggleFavorite'])

const isFavorite = ref(props.game.isFavorite || false)

const toggleFavorite = (event: Event) => {
  event.stopPropagation()
  isFavorite.value = !isFavorite.value
  emit('toggleFavorite', {
    id: props.game.id,
    isFavorite: isFavorite.value,
  })
}
</script>

<template>
  <div class="relative">
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="relative pt-[100%]">
        <img
          :src="game.image"
          :alt="game.title"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div
          v-if="game.multiplier"
          class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs"
        >
          {{ game.multiplier }}
        </div>
        <div
          class="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 rounded-full cursor-pointer"
          @click.stop="toggleFavorite"
        >
          <span
            class="text-base transition-colors duration-200"
            :class="isFavorite ? 'text-yellow-400' : 'text-gray-300'"
            >⭐</span
          >
        </div>
      </div>
      <div class="p-2 text-sm text-center text-gray-700 truncate">{{ game.title }}</div>
    </div>
  </div>
</template>
