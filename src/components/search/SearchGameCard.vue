<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface GameProps {
  game: {
    id: number
    title: string
    image: string
    provider: string
    isHot?: boolean
    isFavorite?: boolean
    categoryId: number
    platformId: number
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

const router = useRouter()

const navigateToSubGame = () => {
  router.push(
    `/subgame?gameCategoryId=${props.game.categoryId}&platformId=${props.game.platformId}`,
  )
}
</script>

<template>
  <div class="game-card w-1/4 p-2" @click="navigateToSubGame">
    <div class="game-wrapper bg-white rounded-lg shadow overflow-hidden">
      <div class="relative pt-[100%]">
        <img
          :src="game.image"
          :alt="game.title"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div
          v-if="game.isHot"
          class="absolute top-2 left-2 w-7 h-7 flex items-center justify-center bg-white/90 rounded-full z-10"
        >
          <span>👍</span>
        </div>
        <div
          class="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 rounded-full cursor-pointer z-10"
          @click="toggleFavorite"
        >
          <span
            class="text-base transition-colors duration-200"
            :class="isFavorite ? 'text-yellow-400' : 'text-gray-300'"
            >⭐</span
          >
        </div>
        <div class="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded text-xs">
          {{ game.provider }}
        </div>
      </div>
      <div class="p-2 text-sm text-center text-gray-700 truncate">{{ game.title }}</div>
    </div>
  </div>
</template>

<style scoped></style>
