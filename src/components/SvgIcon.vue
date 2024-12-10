<template>
  <svg
    :width="width"
    :height="height"
    :fill="fill"
    aria-hidden="true"
    focusable="false"
  >
    <use :xlink:href="`#${iconId}`" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Props to allow flexibility for size, color, and icon reference.
defineProps({
  iconId: {
    type: String,
    required: true, // The ID of the icon in the sprite.
  },
  width: {
    type: String,
    default: '1em', // Default size
  },
  height: {
    type: String,
    default: '1em',
  },
  fill: {
    type: String,
    default: 'currentColor', // Default to inheriting text color
  },
});
</script>

<style scoped>
/* Optional styling for the icon */
</style>
