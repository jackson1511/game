<template>
  <a-model
    :open="open"
    :footer="null"
    :closable="false"
    :width="450"
    :centered="true"
    @cancel="handleClose"
  >
    <h4>Hello World llllllllll</h4>
  </a-model>
</template>

<script lang="ts" setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:open'])

const handleLogout = () => {
  console.log('handleLogout')
}
const handleClose = () => {
  emit('update:open', false)
}
</script>

<style scoped>
/* Add any styles if needed */
</style>
