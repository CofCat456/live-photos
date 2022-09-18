<script setup>
const props = defineProps([
  'user',
  'userImgUrl',
  'message',
  'time',
  'isResponse',
  'responseText',
]);
</script>

<template>
  <div :class="['mb-4 p-4', 'rounded-lg border border-[#E5E5E5]']">
    <div class="flex items-center">
      <img
        :src="userImgUrl"
        :alt="user + '的照片'"
        class="w-[50px] object-cover sm:w-auto"
      />
      <div class="ml-4 flex-1">
        <h4
          :class="[
            'mb-[1px] sm:mb-1',
            'text-base font-medium tracking-[1.6px] text-photo-font sm:text-xl sm:tracking-[2px]',
          ]"
        >
          {{ user }}
        </h4>
        <p
          class="text-xs leading-[18px] tracking-[1.71px] text-photo-button sm:text-sm sm:leading-5 sm:tracking-[2px]"
        >
          {{ time }}
        </p>
      </div>
    </div>
    <p
      :class="[
        'my-2 sm:my-4',
        'text-justify tracking-[0.7px] text-photo-font2',
      ]"
    >
      {{ message }}
    </p>
    <template v-if="isResponse">
      <div class="rounded bg-[#F8F9FA] p-4">
        <p
          :class="[
            'mb-1 sm:mb-0',
            'text-justify text-xs tracking-[0.52px] text-photo-sp sm:text-sm sm:tracking-[0.61px]',
          ]"
        >
          提案者回覆
        </p>
        <p class="text-justify tracking-[0.7px] text-photo-font2">
          {{ responseText }}
        </p>
      </div>
    </template>
  </div>
</template>
