<template>
  <div class="footer">
    <router-link to="/" class="nav-item" @click="handleClick('home')">
      <a-image
        :src="`/public/icons/home${isActive('home') ? '_active' : ''}.avif`"
        :width="36"
        :preview="false"
      />
      <span>{{ t('home') }}</span>
    </router-link>

    <router-link to="/offer" class="nav-item" @click="handleClick('offer')">
      <a-image
        :src="`/public/icons/offers${isActive('offer') ? '_active' : ''}.avif`"
        :width="36"
        :preview="false"
      />
      <span>{{ t('offers') }}</span>
    </router-link>

    <template v-if="isLoggedIn">
      <div class="nav-item cursor-pointer" @click="handleClick('deposit')">
        <a-image
          :src="`/public/icons/footer_deposit${isActive('deposit') ? '' : ''}.avif`"
          :width="36"
          :preview="false"
        />
        <span>{{ t('deposit') }}</span>
      </div>

      <router-link class="nav-item" to="/security?current=5">
        <a-image
          :src="`/public/icons/footer_withdraw${isActive('withdraw') ? '' : ''}.avif`"
          :width="36"
          :preview="false"
        />
        <span>{{ t('withdraw') }}</span>
      </router-link>
    </template>

    <template v-else>
      <div class="nav-item cursor-pointer" @click="handleOpenModal('login')">
        <a-image src="/public/icons/footer_login.avif" :width="36" :preview="false" />
        <span>{{ t('login') }}</span>
      </div>

      <div class="nav-item cursor-pointer" @click="handleOpenModal('register')">
        <a-image src="/public/icons/footer_register.avif" :width="36" :preview="false" />
        <span>{{ t('register') }}</span>
      </div>
    </template>

    <template v-if="isLoggedIn">
      <router-link to="/profile" class="nav-item cursor-pointer">
        <a-image
          :src="`/public/icons/footer_profile${isActive('profile') ? '_active' : ''}.avif`"
          :width="36"
          :preview="false"
        />
        <span>{{ t('profile') }}</span>
      </router-link>
    </template>
    <template v-else>
      <div class="nav-item cursor-pointer" @click="handleOpenModal('login')">
        <a-image
          :src="`/public/icons/footer_profile${isActive('profile') ? '_active' : ''}.avif`"
          :width="36"
          :preview="false"
        />
        <span>{{ t('profile') }}</span>
      </div>
    </template>
  </div>
  <DepositModal v-model:open="showDepositDrawer" />
  <FormModal
    :open="openModal"
    :modal-visible="modalVisible"
    :initial-tab="modalTab"
    @close-modal="handleCloseModal"
    @login-success="handleLoginSuccess"
  />
</template>

<script setup lang="ts">
import DepositModal from '../deposit/DepositModal.vue'
import { useI18n } from 'vue-i18n'
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const { t } = useI18n()
const activeTab = ref('')
const route = useRoute()
const showDepositDrawer = ref(false)

const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.isLoggedIn)

const openModal = ref(false)
const modalVisible = ref(false)
const modalTab = ref('login')

const handleOpenModal = (tab: 'login' | 'register') => {
  modalTab.value = tab
  openModal.value = true
  modalVisible.value = true
  authStore.setModalShown()
}

const handleCloseModal = () => {
  openModal.value = false
  modalVisible.value = false
}

const handleLoginSuccess = (username: string, password: string) => {
  authStore.login(username, password)
  handleCloseModal()
}

const isActive = (tab: string) => activeTab.value === tab

const handleClick = (tab: string) => {
  if (tab === 'deposit') {
    showDepositDrawer.value = true
  } else if (tab === 'withdraw') {
    activeTab.value = tab
  }
}

watch(
  () => route.path,
  (newPath) => {
    switch (newPath) {
      case '/':
        activeTab.value = 'home'
        break
      case '/offer':
        activeTab.value = 'offer'
        break
      case '/profile':
        activeTab.value = 'profile'
        break
      default:
        activeTab.value = ''
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 530px;
  height: 56px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #999;
  font-size: 12px;
}

.nav-item.active {
  color: #65b687;
}

.nav-item :deep(.anticon) {
  font-size: 20px;
  margin-bottom: 2px;
}
</style>
