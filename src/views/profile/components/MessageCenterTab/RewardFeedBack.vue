<template>
  <div class="flex space-x-2 justify-between items-center px-3">
    <div class="btn">
      <a-button
        :type="currentActivePage === 'create' ? 'primary' : 'default'"
        shape="round"
        size="small"
        @click="changePage('create')"
      >
        Create Feedback
      </a-button>
      <a-button
        :type="currentActivePage === 'list' ? 'primary' : 'default'"
        shape="round"
        size="small"
        @click="changePage('list')"
      >
        My Feedback
      </a-button>
    </div>

    <div v-if="currentActivePage === 'list'" class="flex justify-end items-center">
      <div class="flex flex-col mr-3">
        <div class="">Reward</div>
        <div class="text-center">0.00</div>
      </div>
      <a-button type="primary" shape="round" size="small">Receive</a-button>
    </div>
  </div>
  <a-card size="small">
    <div v-if="currentActivePage === 'create'">
      <a-form layout="vertical" :model="formState">
        <a-form-item label="Feedback Type">
          <a-select placeholder="Please select a feedback type">
            <a-select-option value="demo">Demo</a-select-option>
            <a-select-option value="demo">Demo</a-select-option>
            <a-select-option value="demo">Demo</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Feedback Content (Suggestion for revision)">
          <a-textarea
            :rows="5"
            maxlength="200"
            placeholder="Your opinions are valuable to us. All valuable opinions will be accepted, and once accepted, will be rewarded with cash prizes according to their usefulness. We welcome your opinions!"
          />
        </a-form-item>
        <a-form-item label="Picture don't lie (Easier to adopted)">
          <a-upload action="/upload.do" list-type="picture-card">
            <div>
              <PlusOutlined />
              <div style="margin-top: 8px">Upload</div>
            </div>
          </a-upload>
        </a-form-item>
        <p class="help-text">Support video and image formats, size shold not be exceeding 10 MB</p>
        <p>
          We've set up huge bonuses specifically to collect feedback so that we can optimize the
          system and features to give you a better experience! Once accepted, rewards will be given
          based on the usefulness (except those not accepted)
        </p>

        <a-button type="primary" size="large" block>Submit Feedback</a-button>
      </a-form>

    </div>
    <div v-if="currentActivePage === 'list'">
      <a-empty description="No Feedback yet" class="my-10" />
    </div>
  </a-card>
  <!-- <div class="sticky-footer">

  </div> -->
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { UnwrapRef } from 'vue'

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline'
  fieldA: string
  fieldB: string
}
const formState: UnwrapRef<FormState> = reactive({
  layout: 'vertical',
  fieldA: '',
  fieldB: '',
})
const currentActivePage = ref('create') // create && list page

const changePage = (page: string) => {
  console.log('Tab changed to:', page)
  currentActivePage.value = page
}
</script>
