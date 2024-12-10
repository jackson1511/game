<script setup lang="ts">
import CategoryContent from '@/components/home/CategoryContent.vue'
import TheSidebar from '@/components/layout/TheSidebar.vue'
import ContactInfo from '@/components/home/ContactInfo.vue'
import HeaderContent from '@/components/home/HeaderContent.vue'
import MoreModal from '@/components/home/MoreModal.vue'
import GameTabs from '@/components/common/GameTabs.vue'
import ReturnToTop from '@/components/common/ReturnToTop.vue'
import FormModal from '@/components/modal/FormModal.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const activeCategory = ref('hot')
const activeTab = ref('hot')
const mainContentRef = ref<HTMLElement | null>(null)
const showMoreModal = ref(false)
const hotGames = ref([
  {
    id: 1,
    title: 'PG Slots',
    image: 'https://cdntoos.hwylaws.com/game_pictures/g/CL/200/3/2000067/default.avif',
    provider: 'PG',
  },
  {
    id: 2,
    title: 'JDB Slots',
    image: 'https://cdntoos.hwylaws.com/game_pictures/p/150/CL/hot/310/3/default_USDT.avif',
    provider: 'JDB',
  },
  {
    id: 3,
    title: 'Mahjong Ways',
    image: 'https://cdntoos.hwylaws.com/game_pictures/g/CL/200/3/2000067/default.avif',
    provider: 'PG',
  },
])

const categories = [
  { id: 'slot', title: 'Slot' },
  { id: 'live', title: 'Live' },
  { id: 'fishing', title: 'Fishing' },
  { id: 'cards', title: 'Cards' },
  { id: 'lottery', title: 'Lottery' },
  { id: 'blockchain', title: 'Blockchain' },
  { id: 'sports', title: 'Sports' },
]

const favoriteGames = ref<Set<number>>(new Set())
const openModal = ref(false)
const modalVisible = ref(false)
const modalTab = ref('login')
const authStore = useAuthStore()

onMounted(() => {
  if (!authStore.isLoggedIn && !authStore.hasShownLoginModal) {
    setTimeout(() => {
      if (!authStore.hasShownLoginModal) {
        modalVisible.value = true
        openModal.value = true
        authStore.setModalShown()
      }
    }, 3000)
  }
})

const handleCategoryChange = (category: string) => {
  activeCategory.value = category

  if (!mainContentRef.value) return

  if (category === 'hot') {
    mainContentRef.value.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const targetSection = mainContentRef.value.querySelector(`[data-category="${category}"]`)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const updateActiveCategory = () => {
  if (!mainContentRef.value) return

  const hotSection = mainContentRef.value.querySelector('[data-category="hot"]') as HTMLElement
  if (!hotSection) return

  const hotRect = hotSection.getBoundingClientRect()
  const threshold = window.innerHeight / 3 + 70

  if (hotRect.top <= threshold && hotRect.bottom >= threshold) {
    activeCategory.value = 'hot'
    return
  }

  // Check other category sections
  const categoryElements = mainContentRef.value.querySelectorAll('.category-section')
  let foundActive = false

  categoryElements.forEach((element) => {
    const el = element as HTMLElement
    const rect = el.getBoundingClientRect()
    const id = el.getAttribute('data-category')

    if (rect.top <= threshold && rect.bottom >= threshold && id) {
      activeCategory.value = id
      foundActive = true
    }
  })

  if (!foundActive && hotRect.bottom < 0) {
    const firstVisibleCategory = Array.from(categoryElements).find((element) => {
      const rect = (element as HTMLElement).getBoundingClientRect()
      return rect.bottom > 0
    })

    if (firstVisibleCategory) {
      const id = firstVisibleCategory.getAttribute('data-category')
      if (id) activeCategory.value = id
    }
  }
}
const openMoreModal = () => {
  showMoreModal.value = !showMoreModal.value
}

const toggleFavorite = ({ id, isFavorite }: { id: number; isFavorite: boolean }) => {
  console.log(favoriteGames.value)
  if (isFavorite) {
    favoriteGames.value.add(id)
  } else {
    favoriteGames.value.delete(id)
  }
  localStorage.setItem('favoriteGames', JSON.stringify([...favoriteGames.value]))
}

onMounted(() => {
  console.log('onMounted')
  console.log(authStore.hasShownLoginModal)

  if (mainContentRef.value) {
    mainContentRef.value.addEventListener('scroll', updateActiveCategory)
  }
  const savedFavorites = localStorage.getItem('favoriteGames')
  if (savedFavorites) {
    favoriteGames.value = new Set(JSON.parse(savedFavorites))
  }
})

onUnmounted(() => {
  if (mainContentRef.value) {
    mainContentRef.value.removeEventListener('scroll', updateActiveCategory)
  }
})

const handleCloseModal = () => {
  openModal.value = false
  modalVisible.value = false
  authStore.setModalShown()
}

const handleLoginSuccess = (username: string, password: string) => {
  authStore.login(username, password)
  handleCloseModal()
}
</script>

<template>
  <div class="home-view">
    <HeaderContent @open-more="openMoreModal" />
    <div class="layout">
      <TheSidebar
        :active-category="activeCategory"
        class="sticky-sidebar"
        @category-change="handleCategoryChange"
      />
      <div class="scrollable-content" ref="mainContentRef">
        <!-- Hot Games Section -->
        <section class="hot-section" data-category="hot">
          <GameTabs
            v-model:activeTab="activeTab"
            :games="hotGames"
            :favoriteGames="favoriteGames"
            :cardWidth="'w-1/3'"
            @toggle-favorite="toggleFavorite"
          />

          <div class="load-more">
            <p>Currently displaying 9 Hot games out of 38</p>
            <button>Load More ⌄</button>
          </div>
        </section>

        <!-- Category Sections -->
        <section
          v-for="category in categories"
          :key="category.id"
          :data-category="category.id"
          class="category-section"
        >
          <CategoryContent :category="category.id" />
        </section>
      </div>
    </div>
    <ContactInfo />
    <MoreModal v-model:open="showMoreModal" />
    <ReturnToTop :scrollable-ref="mainContentRef" />
    <FormModal
      :open="openModal"
      :modal-visible="modalVisible"
      :initial-tab="modalTab"
      @close-modal="handleCloseModal"
      @login-success="handleLoginSuccess"
    />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
}

.sticky-sidebar {
  position: sticky;
  top: 80px;
  height: 100%;
  flex-shrink: 0;
  width: 130px;
  padding: 0 10px;
  background: #fff;
}

.scrollable-content {
  flex: 1;
  width: calc(100% - 130px);
  overflow-y: auto;
  height: 100%;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollable-content::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollable-content {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.hot-section {
  background: white;
  margin-bottom: 12px;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #eee;
  background: white;
}

.tab {
  padding: 12px 24px;
  color: #666;
  cursor: pointer;
}

.tab.active {
  color: #65b687;
  border-bottom: 2px solid #65b687;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 10px;
  background: white;
}

.game-card {
  width: 100px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.game-card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.provider-tag {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}

.game-title {
  text-align: center;
  font-size: 12px;
  margin-top: 4px;
}

.load-more {
  text-align: center;
  padding: 20px;
  color: #666;
}

.load-more button {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
}
</style>
