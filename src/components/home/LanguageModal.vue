<script setup lang="ts">
import { ref } from 'vue'
import { locale } from '@/utils/i18n'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:open'])

const languages = [
  { id: 'zh-TW', label: '繁體中文', value: 'zh-TW' },
  { id: 'zh-CN', label: '简体中文', value: 'zh-CN' },
  { id: 'en-US', label: 'English', value: 'en-US' },
]

const selectedLang = ref(locale.value)

const handleLanguageSelect = async (langId: string) => {
  try {
    selectedLang.value = langId
    locale.value = langId
    emit('update:open', false)
  } catch (error) {
    console.error('Failed to change language:', error)
  }
}

const handleClose = () => {
  emit('update:open', false)
}
</script>

<template>
  <a-modal
    :open="open"
    :footer="null"
    :closable="false"
    :width="450"
    :centered="true"
    @cancel="handleClose"
  >
    <div class="px-0">
      <div class="flex items-center justify-center pb-3 border-b border-gray-100">
        <h4 class="text-xl font-normal m-0 flex-1 text-center">Select Language</h4>
      </div>
      <div class="py-2">
        <div v-for="(lang, index) in languages" :key="lang.id" class="relative">
          <div
            class="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
            @click="handleLanguageSelect(lang.id)"
          >
            <span :class="{ 'text-primary': selectedLang === lang.id }">
              {{ lang.label }}
            </span>
            <div class="flex items-center">
              <div
                class="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                :class="selectedLang === lang.id ? 'border-primary' : 'border-gray-300'"
              >
                <div
                  v-if="selectedLang === lang.id"
                  class="w-2.5 h-2.5 rounded-full bg-primary"
                ></div>
              </div>
            </div>
          </div>
          <div
            v-if="index !== languages.length - 1"
            class="absolute bottom-0 left-6 right-6 border-t border-gray-100"
          ></div>
        </div>
      </div>
    </div>
  </a-modal>
  <div
    v-if="open"
    class="fixed inset-0 z-[2000] flex items-center justify-center pointer-events-none"
  >
    <div class="absolute top-[67%] left-1/2 transform -translate-x-1/2">
      <button
        class="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer pointer-events-auto hover:bg-gray-50 shadow-md"
        @click="handleClose"
      >
        <span class="text-2xl text-gray-600 leading-none mb-0.5">&times;</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.text-primary {
  color: #26a17b;
}

.border-primary {
  border-color: #26a17b;
}

.bg-primary {
  background-color: #26a17b;
}

.hover\:bg-gray-50:hover {
  transition: background-color 0.2s ease;
}

button:hover {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

button {
  transition: all 0.2s ease;
}

button:hover {
  transform: scale(1.05);
}
</style>
