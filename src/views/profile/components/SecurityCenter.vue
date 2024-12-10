<template>
  <div v-if="currentActivePage === '1'">
    <MobileVerify />
  </div>
  <div v-else-if="currentActivePage === '2'">
    <EmailVerify />
  </div>
  <div v-else-if="currentActivePage === '3'">
    <GoogleAuthenticator />
  </div>
  <div v-else-if="currentActivePage === '4'">
    <ChangePassword />
  </div>
  <div v-else-if="currentActivePage === '5'">
    <WithdrawPassword />
  </div>
  <div v-else-if="currentActivePage === '6'">
    <SecurityQuestion />
  </div>

  <div v-else>
    <StickyHeader>
      <template #back-icon>
        <a-button type="text" @click="router.push('/profile')">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </a-button>
      </template>
      <template #title> Scruity Center </template>
    </StickyHeader>
    <!-- Member Account -->
    <div class="p-3">
      <!-- Security Settings -->
      <div class="bg-white rounded-lg shadow-sm divide-y divide-gray-200 mb-4">
        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <ion-icon name="person"></ion-icon>
            <span class="text-gray-800 font-medium">Member Account</span>
          </div>
          <span class="text-gray-500">mgmg</span>
        </div>

        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <ion-icon name="phone-portrait-outline"></ion-icon>
            <span class="text-gray-800 font-medium">Mobile Phone</span>
          </div>
          <router-link to="/security?current=1" class="flex items-center">
            <span class="text-gray-500">Unlinked</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </router-link>
        </div>

        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <ion-icon name="mail-outline"></ion-icon>
            <span class="text-gray-800 font-medium">Email</span>
          </div>
          <router-link to="/security?current=2" class="flex items-center">
            <span class="text-gray-500">Unlinked</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </router-link>
        </div>

        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <ion-icon name="logo-google"></ion-icon>
            <span class="text-gray-800 font-medium">Google Authenticator</span>
          </div>
          <router-link to="/security?current=3" class="flex items-center">
            <span class="text-gray-500">Unlinked</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </router-link>
        </div>
      </div>

      <!-- Password Settings -->
      <div class="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <ion-icon name="key"></ion-icon>
            <span class="text-gray-800 font-medium">Login Password</span>
          </div>

          <router-link to="/security?current=4" class="flex items-center">
            <span class="text-gray-500">Update</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </router-link>
        </div>

        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <ion-icon name="card"></ion-icon>
            <span class="text-gray-800 font-medium">Withdrawal Password</span>
          </div>
          <router-link to="/security?current=5" class="flex items-center">
            <span class="text-gray-500">Unset</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </router-link>
        </div>

        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <ion-icon name="hand-left"></ion-icon>
            <span class="text-gray-800 font-medium">Security Question</span>
          </div>
          <router-link to="/security?current=6" class="flex items-center">
            <span class="text-gray-500">Already Set</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import StickyHeader from './StickyHeader.vue'
import { useRoute, useRouter } from 'vue-router'
import MobileVerify from './SecurityPage/MobileVerify.vue'
import EmailVerify from './SecurityPage/EmailVerify.vue'
import GoogleAuthenticator from './SecurityPage/GoogleAuthenticator.vue'
import ChangePassword from './SecurityPage/ChangePassword.vue'
import WithdrawPassword from './SecurityPage/WithdrawPassword.vue'
import SecurityQuestion from './SecurityPage/SecurityQuestion.vue'
const router = useRouter()
const route = useRoute()
const currentPage = route.query.current ? String(route.query.current) : '0'

const currentActivePage = ref(currentPage)
console.log('origin current page', currentActivePage)
watch(
  () => route.query.current,
  (newCurrent) => {
    currentActivePage.value = newCurrent ? String(newCurrent) : '0' // Update activeKey when tab query changes
    console.log('origin current page chagne watcher', newCurrent)
  },
)
// const activeKey = ref(currentPage);
// currentActivePage = router.getRoutes.prototype.path.split('/')[2]
</script>
