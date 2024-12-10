<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  DownloadOutlined,
  CheckOutlined,
  SoundOutlined,
  RetweetOutlined,
  CloseOutlined,
  SwapOutlined,
  CustomerServiceOutlined,
  RedoOutlined,
} from '@ant-design/icons-vue'
import { musicService, type Song } from '../../services/musicService'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const isPlaying = ref(false)
const currentTime = ref('00:00')
const duration = ref('00:00')
const progress = ref(0)
const volume = ref(80)
const musicList = ref<Song[]>([])
const activeTab = ref('system')
const currentSong = ref<Song | null>(null)
const audioElement = ref<HTMLAudioElement | null>(null)
const currentIndex = ref(0)
const isLoading = ref(false)
const error = ref<string | null>(null)
const playMode = ref<'cycle' | 'shuffle' | 'repeat'>('cycle')

onMounted(() => {
  audioElement.value = new Audio()
  audioElement.value.addEventListener('timeupdate', updateProgress)
  audioElement.value.addEventListener('ended', handleSongEnd)
  audioElement.value.addEventListener('loadedmetadata', updateDuration)
  loadMusic()
})

// Cleanup
onUnmounted(() => {
  if (audioElement.value) {
    audioElement.value.removeEventListener('timeupdate', updateProgress)
    audioElement.value.removeEventListener('ended', handleSongEnd)
    audioElement.value.removeEventListener('loadedmetadata', updateDuration)
    audioElement.value.pause()
  }
})

const loadMusic = async () => {
  try {
    isLoading.value = true
    error.value = null
    musicList.value = await musicService.getMusic()

    if (musicList.value.length > 0) {
      currentSong.value = musicList.value[0]
      loadAudioSource(currentSong.value)
    } else {
      error.value = 'No songs found'
    }
  } catch (err) {
    console.error('Error loading music:', err)
    error.value = 'Failed to load music'
  } finally {
    isLoading.value = false
  }
}

const refreshMusic = async () => {
  try {
    isLoading.value = true
    error.value = null
    musicList.value = await musicService.refreshMusic()

    if (musicList.value.length > 0) {
      currentSong.value = musicList.value[0]
      loadAudioSource(currentSong.value)
    }
  } catch (err) {
    console.error('Error refreshing music:', err)
    error.value = 'Failed to refresh music'
  } finally {
    isLoading.value = false
  }
}

// Audio control functions
const togglePlay = () => {
  if (!audioElement.value || !currentSong.value) return

  if (isPlaying.value) {
    audioElement.value.pause()
  } else {
    audioElement.value.play()
  }
  isPlaying.value = !isPlaying.value
}

const loadAudioSource = (song: Song) => {
  if (!audioElement.value) return
  audioElement.value.src = song.audioUrl
  audioElement.value.load()
  currentTime.value = '00:00'
  progress.value = 0
}

const playSong = (song: Song, index: number) => {
  currentSong.value = song
  currentIndex.value = index
  loadAudioSource(song)
  audioElement.value?.play()
  isPlaying.value = true
}

const playNext = () => {
  const nextIndex = (currentIndex.value + 1) % musicList.value.length
  playSong(musicList.value[nextIndex], nextIndex)
}

const playPrevious = () => {
  const prevIndex = currentIndex.value === 0 ? musicList.value.length - 1 : currentIndex.value - 1
  playSong(musicList.value[prevIndex], prevIndex)
}

const updateProgress = () => {
  if (!audioElement.value) return
  const current = audioElement.value.currentTime
  const total = audioElement.value.duration
  progress.value = (current / total) * 100
  currentTime.value = formatTime(current)
}

const updateDuration = () => {
  if (!audioElement.value) return
  duration.value = formatTime(audioElement.value.duration)
}

const handleSongEnd = () => {
  switch (playMode.value) {
    case 'cycle':
      playNext()
      break
    case 'shuffle':
      const randomIndex = Math.floor(Math.random() * musicList.value.length)
      playSong(musicList.value[randomIndex], randomIndex)
      break
    case 'repeat':
      if (currentSong.value) {
        loadAudioSource(currentSong.value)
        audioElement.value?.play()
      }
      break
  }
}

const updateVolume = (value: number) => {
  if (!audioElement.value) return
  volume.value = value
  audioElement.value.volume = value / 100
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

const closeModal = () => {
  if (audioElement.value) {
    audioElement.value.pause()
    isPlaying.value = false
  }
  emit('update:open', false)
}

const handleDownload = async (song: Song, event: Event) => {
  event.stopPropagation()

  try {
    // Start download
    const response = await fetch(song.downloadUrl!)
    const blob = await response.blob()

    // Create download link
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${song.name}.mp3`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)

    musicService.markAsDownloaded(song.id)

    musicList.value = musicList.value.map((s) =>
      s.id === song.id ? { ...s, isDownloaded: true } : s,
    )
  } catch (error) {
    console.error('Download failed:', error)
  }
}

const togglePlayMode = () => {
  switch (playMode.value) {
    case 'cycle':
      playMode.value = 'shuffle'
      break
    case 'shuffle':
      playMode.value = 'repeat'
      break
    case 'repeat':
      playMode.value = 'cycle'
      break
  }
}

const handleProgressChange = (value: number) => {
  if (!audioElement.value) return
  const time = (value / 100) * audioElement.value.duration
  audioElement.value.currentTime = time
}
</script>

<template>
  <a-modal
    :open="open"
    @update:open="(val: boolean) => emit('update:open', val)"
    title="Music"
    :footer="null"
    :closable="false"
    class="music-player-modal"
    width="500px"
    :mask-closable="false"
  >
    <div class="card-container mb-4">
      <div class="volume-control flex items-center gap-2 px-6 py-4">
        <span class="text-gray-600">Music</span>
        <div class="flex-1">
          <a-slider
            v-model:value="volume"
            class="volume-slider"
            @change="updateVolume"
            :tooltip-open="false"
          />
        </div>
        <span class="volume-icon">
          <sound-outlined class="text-green-600" />
        </span>
      </div>
    </div>

    <div class="card-container mb-4">
      <div class="p-4">
        <div class="text-center mb-4">
          <h2 class="text-2xl font-normal">{{ currentSong?.name || 'No song selected' }}</h2>
        </div>

        <div class="progress-container mb-4 w-[calc(100%-40px)] mx-auto">
          <div class="flex justify-between text-gray-400 text-sm mb-2">
            <span>{{ currentTime }}</span>
            <span>{{ duration }}</span>
          </div>
          <a-slider
            v-model:value="progress"
            class="progress-slider"
            :tooltip-open="false"
            @change="handleProgressChange"
          />
        </div>

        <div class="controls flex justify-between items-center">
          <div class="cycle-btn text-center" @click="togglePlayMode">
            <RetweetOutlined v-if="playMode === 'cycle'" class="text-green-600 text-lg" />
            <SwapOutlined v-else-if="playMode === 'shuffle'" class="text-green-600 text-lg" />
            <RedoOutlined v-else class="text-green-600 text-lg" />
            <div class="text-xs text-gray-400">
              {{ playMode.charAt(0).toUpperCase() + playMode.slice(1) }}
            </div>
          </div>
          <div class="flex items-center gap-12">
            <step-backward-outlined
              class="text-2xl text-green-600 cursor-pointer"
              @click="playPrevious"
            />
            <div class="play-button cursor-pointer" @click="togglePlay">
              <pause-circle-outlined v-if="isPlaying" class="text-5xl text-green-600" />
              <play-circle-outlined v-else class="text-5xl text-green-600" />
            </div>
            <step-forward-outlined
              class="text-2xl text-green-600 cursor-pointer"
              @click="playNext"
            />
          </div>
          <div class="text-center">
            <div class="text-xl">{{ musicList.filter((song) => song.isDownloaded).length }}</div>
            <div class="text-sm text-gray-400">Downloaded</div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-container">
      <a-tabs v-model:activeKey="activeTab" class="music-tabs" :centered="true" size="large">
        <a-tab-pane key="system" tab="System Music">
          <div v-if="isLoading" class="py-8 text-center">
            <a-spin />
            <div class="mt-2 text-gray-500">Loading music...</div>
          </div>

          <div v-else-if="error" class="py-8 text-center">
            <div class="text-red-500 mb-2">{{ error }}</div>
            <a-button type="primary" @click="refreshMusic"> Try Again </a-button>
          </div>

          <div v-else class="music-list-container">
            <div class="music-list px-6">
              <div
                v-for="(song, index) in musicList"
                :key="song.id"
                :class="[
                  'music-item flex justify-between items-center py-3 border-b cursor-pointer',
                  { active: currentSong?.id === song.id },
                ]"
                @click="playSong(song, index)"
              >
                <div class="flex items-center gap-4">
                  <CustomerServiceOutlined class="text-gray-400" />
                  <span class="text-[#26a17b]">{{ song.name }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-gray-400">{{ song.duration }}</span>
                  <span class="download-icon" @click.stop="handleDownload(song, $event)">
                    <check-outlined v-if="song.isDownloaded" class="text-green-600" />
                    <download-outlined v-else class="text-green-600 hover:text-green-700" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="my" tab="My Music">
          <div class="p-4 text-center text-gray-400">No music added yet</div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-modal>

  <Teleport to="body">
    <div v-if="open" class="fixed-bottom-close">
      <div class="close-button" @click.stop="closeModal">
        <CloseOutlined />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.music-player-modal {
  position: relative;
  z-index: 1501;

  :global(.ant-modal-content) {
    padding: 16px;
    border-radius: 12px;
  }

  :global(.ant-modal-header) {
    margin-bottom: 16px;
  }

  :global(.ant-modal-title) {
    font-size: 20px;
    text-align: center !important;
  }
}

.music-player-modal :global(.ant-modal-wrap),
.music-player-modal :global(.ant-modal-mask) {
  z-index: 1500;
}

.card-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
}

.music-list-container {
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
}

.music-tabs {
  :global(.ant-tabs-nav) {
    margin: 0;
    padding: 0 16px;
  }

  :global(.ant-tabs-tab) {
    padding: 12px 0;
    margin: 0 16px 0 0;
  }

  :global(.ant-tabs-tab-btn) {
    color: #666 !important;
    font-size: 16px;
  }

  :global(.ant-tabs-tab-btn:hover) {
    color: #666 !important;
  }

  :global(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
    color: #26a17b !important;
  }

  :global(.ant-tabs-ink-bar) {
    background: #26a17b;
  }
}

.volume-slider,
.progress-slider {
  :global(.ant-slider) {
    margin: 10px 0;
  }

  :global(.ant-slider-rail) {
    background-color: #e5e7eb !important;
    height: 8px !important;
    border-radius: 4px;
  }

  :global(.ant-slider-track) {
    background-color: #26a17b !important;
    height: 8px !important;
    border-radius: 4px;
  }

  :global(.ant-slider-handle) {
    width: 16px !important;
    height: 16px !important;
    border: 2px solid #26a17b !important;
    border-radius: 50% !important;
    background-color: white !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
    margin-top: -2px !important;
    cursor: pointer;
    opacity: 1 !important;
  }

  :global(.ant-slider-handle:hover) {
    border-color: #26a17b !important;
  }

  :global(.ant-slider-handle:focus) {
    border-color: #26a17b !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  }

  :global(.ant-slider-handle::after) {
    display: none !important;
  }

  :global(.ant-slider:hover .ant-slider-track) {
    background-color: #26a17b !important;
  }

  :global(.ant-slider:hover .ant-slider-rail) {
    background-color: #e5e7eb !important;
  }

  :global(.ant-slider:hover .ant-slider-handle) {
    border-color: #26a17b !important;
  }
}

.volume-slider {
  :global(.ant-slider-rail),
  :global(.ant-slider-track) {
    height: 8px;
  }

  :global(.ant-slider-handle) {
    width: 24px;
    height: 24px;
    margin-top: -8px;

    &::after {
      width: 24px;
      height: 24px;
    }
  }
}

.fixed-bottom-close {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
}

.close-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #666;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

.music-item {
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
}

.download-icon {
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(74, 222, 128, 0.1);
  }
}

.cycle-btn {
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  .anticon {
    font-size: 20px;
    margin-bottom: 4px;
  }
}

.volume-control {
  padding: 12px 24px;
}

.progress-container {
  padding: 0 24px;
}
</style>
