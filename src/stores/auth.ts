import { defineStore } from 'pinia'
import { ref } from 'vue'

interface UserCredentials {
  username: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const username = ref('')
  const hasShownLoginModal = ref(false)

  // Demo credentials for development
  const demoCredentials: UserCredentials = {
    username: 'demo',
    password: 'demo123456',
  }

  const login = (loginUsername: string, loginPassword: string): boolean => {
    if (loginUsername === demoCredentials.username && loginPassword === demoCredentials.password) {
      isLoggedIn.value = true
      username.value = loginUsername
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username', loginUsername)
      return true
    }
    return false
  }

  const logout = () => {
    isLoggedIn.value = false
    username.value = ''
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
  }

  const initAuth = () => {
    const storedAuth = localStorage.getItem('isLoggedIn')
    const storedUsername = localStorage.getItem('username')
    if (storedAuth === 'true' && storedUsername) {
      isLoggedIn.value = true
      username.value = storedUsername
    }
  }

  const setModalShown = () => {
    hasShownLoginModal.value = true
  }

  initAuth()

  return {
    isLoggedIn,
    username,
    hasShownLoginModal,
    login,
    logout,
    initAuth,
    setModalShown,
  }
})
