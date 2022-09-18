<script setup>
const props = defineProps(['title', 'imgUrl', 'text']);
</script>

<template>
  <div class="mb-4 sm:mb-6">
    <img
      :src="imgUrl"
      :alt="title + '的照片'"
      :class="['w-full', 'mb-4 sm:mb-6', 'object-cover']"
    />
    <div class="mb-[5px] flex items-center">
      <div :class="['h-7', 'pr-[15px]', 'border-l-4 border-photo-primary']" />
      <h3
        class="text-xl font-bold tracking-[1.6px] text-photo-font sm:text-2xl sm:tracking-[1.92px]"
      >
        {{ title }}
      </h3>
    </div>
    <p class="text-justify leading-8 text-photo-font">{{ text }}</p>
  </div>
</template>
