<template>
  <div class="flex justify-between">
    <a-form
    :model="formState"
    name="horizontal_login"
    layout="inline"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
  <a-form-item>
      <a-select style="width: 120px;" class="round" placement="bottomLeft" size="small" clearIcon>
        <a-select-option value="1">Today</a-select-option>
        <a-select-option value="2">Yestersday</a-select-option>
        <a-select-option value="3">This Week</a-select-option>
        <a-select-option value="4">Last Week</a-select-option>
        <a-select-option value="5">This Month</a-select-option>
        <a-select-option value="6">Last Month</a-select-option>
        <a-select-option value="7">All</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item>
      <a-select style="width: 130px;" class="round" placement="bottomLeft" size="small" clearIcon>
        <a-select-option value="11">All Type</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item>
      <a-select style="width: 130px;" class="round" placement="bottomLeft" size="small" clearIcon>
        <a-select-option value="22">Sub Categories</a-select-option>
      </a-select>
    </a-form-item>
  </a-form>
  <div class="">
    <a-button type="primary" class="round">sort</a-button>
  </div>


  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue';
interface FormState {
  username: string;
  password: string;
}
const formState = reactive<FormState>({
  username: '',
  password: '',
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>
