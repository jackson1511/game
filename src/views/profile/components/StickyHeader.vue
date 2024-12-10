<template>
  <!-- Render header only if there is a title slot -->
  <div class="sticky-header" v-if="slots.title">
    <a-space align="center" class="header-content" size="middle">
      <!-- Back Icon Slot (placeholder if not present) -->
      <div class="back-icon">
        <slot name="back-icon">
          <div class="spacer"></div>
        </slot>
      </div>

      <!-- Title Slot (always centered) -->
      <div class="header-title">
        <slot name="title"></slot>
      </div>

      <!-- Action Slot (placeholder if not present) -->
      <div class="action">
        <slot name="action">
          <div class="spacer"></div>
        </slot>
      </div>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

// Access the slots
const slots = useSlots();
</script>
<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px; /* Adjust width as needed */
  margin: 0 auto;
}

.header-title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  flex: 1;
}

/* Placeholder for missing back-icon or action */
.spacer {
  width: 40px; /* Width to match the back icon or action */
  height: 24px; /* Adjust based on icon size */
}

.back-icon,
.action {
  flex: none;
  font-size: 30px;
}
</style>
