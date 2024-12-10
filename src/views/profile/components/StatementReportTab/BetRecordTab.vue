<template>
  <a-form layout="inline" class="custom-scrollbar overflow-x-auto whitespace-nowrap">
    <!-- Form Items Container -->
    <div class="flex space-x-2">
      <!-- Date Select -->
      <a-form-item>
        <a-select
          class="rounded"
          placement="bottomLeft"
          size="small"
          allowClear
          style="width: 200px;"
        >
          <a-select-option value="1">Today</a-select-option>
          <a-select-option value="2">Yesterday</a-select-option>
          <a-select-option value="3">This Week</a-select-option>
          <a-select-option value="4">Last Week</a-select-option>
          <a-select-option value="5">This Month</a-select-option>
          <a-select-option value="6">Last Month</a-select-option>
          <a-select-option value="7">All</a-select-option>
        </a-select>
      </a-form-item>

      <!-- Type Select -->
      <a-form-item>
        <a-select
          class="w-[130px] rounded"
          placement="bottomLeft"
          size="small"
          allowClear
        >
          <a-select-option value="11">All Type</a-select-option>
        </a-select>
      </a-form-item>

      <!-- Sub-Categories Select -->
      <a-form-item>
        <a-select
          class="w-[130px] rounded"
          placement="bottomLeft"
          size="small"
           style="width: 200px;"
          allowClear
        >
          <a-select-option value="22">Sub Categories</a-select-option>
        </a-select>
      </a-form-item>

      <!-- Repeated Options -->
      <a-form-item>
        <a-select
          class="w-[130px] rounded"
          placement="bottomLeft"
          size="small"
           style="width: 200px;"
          allowClear
        >
          <a-select-option value="11">All Type</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item>
        <a-select
          class="w-[130px] rounded"
          placement="bottomLeft"
          size="small"
          allowClear
        >
          <a-select-option value="22">Sub Categories</a-select-option>
        </a-select>
      </a-form-item>
    </div>
  </a-form>
</template>
<script setup lang="ts">
</script>
<style scoped>
.custom-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.custom-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}
</style>
