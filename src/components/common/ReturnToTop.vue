<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  scrollableRef?: HTMLElement | null
}

const props = defineProps<Props>()
const showReturnTop = ref(false)

const handleScroll = () => {
  if (props.scrollableRef) {
    const windowScroll = document.documentElement.scrollTop
    const containerScroll = props.scrollableRef.scrollTop
    showReturnTop.value = windowScroll > 200 || containerScroll > 200
  } else {
    const windowScroll = document.documentElement.scrollTop
    showReturnTop.value = windowScroll > 200
  }
}

const scrollToTop = () => {
  // First trigger
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  if (props.scrollableRef) {
    props.scrollableRef.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
  if (props.scrollableRef) {
    props.scrollableRef.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
  if (props.scrollableRef) {
    props.scrollableRef.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div v-if="showReturnTop" class="return-to-top" @click="scrollToTop">
    <div class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </div>
    <span>Top</span>
  </div>
</template>

<style scoped>
.return-to-top {
  position: fixed;
  bottom: 70px;
  right: max(16px, calc(50% - 530px / 2 + 16px));
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 4px;
  padding: 8px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 999;
}

.return-to-top .icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #65b687;
  margin-bottom: 2px;
}

.return-to-top span {
  font-size: 12px;
  color: #65b687;
}
</style>
