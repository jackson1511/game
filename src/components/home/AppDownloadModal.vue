<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:open'])

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
      <div class="flex flex-col items-center">
        <h4 class="text-xl font-normal mb-2 text-[#65B49C]">APP Download</h4>

        <div class="app-logo mb-6">
          <img src="/public/icons/app_download_icon.avif" alt="App Logo" class="w-20 h-20" />
        </div>

        <div class="download-options w-full px-2 flex gap-3">
          <a
            href="#speed-version"
            class="download-btn flex-1 border border-[#65B49C] text-[#65B49C] rounded-lg py-3 px-4 text-center hover:text-[#65B49C]"
          >
            <div>V 1.0.26</div>
            <div>Speed Version (6.3M)</div>
          </a>

          <a
            href="#normal-version"
            class="download-btn flex-1 bg-[#65B49C] text-white rounded-lg py-3 px-4 text-center hover:text-white"
          >
            <div>V 4.2.21</div>
            <div>Normal Version (65.1M)</div>
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2">
      <button
        class="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-50"
        @click="handleClose"
      >
        <span class="text-3xl text-gray-600 leading-none">&times;</span>
      </button>
    </div>
  </a-modal>
</template>

<style scoped>
.download-btn {
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  min-width: 160px;
}

button {
  transition: all 0.2s ease;
}

button:hover {
  transform: scale(1.05);
}

:deep(.ant-modal-content) {
  overflow: visible;
  padding-bottom: 2rem;
}
</style>
