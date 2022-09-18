<script setup>
const props = defineProps(['title', 'date', 'text', 'imgUrl']);
</script>

<template>
  <div
    :class="[
      'w-full',
      'flex',
      'mb-4',
      'border border-[#E5E5E5]',
      'sm;rounded rounded-lg',
    ]"
  >
    <img
      :src="imgUrl"
      :alt="title + '的照片'"
      class="w-[135px] object-cover sm:w-auto"
    />
    <div class="flex-1 p-4">
      <h4 class="text-base font-bold tracking-[0.8px] text-photo-font">
        {{ title }}
      </h4>
      <p class="text-sm leading-6 tracking-[0.49px] text-photo-button">
        {{ date }}
      </p>
      <p
        :class="[
          'hidden sm:block',
          'my-2',
          'text-justify text-sm tracking-[0.7px] text-photo-button',
        ]"
      >
        {{ text }}
      </p>
      <a
        :class="[
          'mt-2',
          'text-base font-bold leading-6 tracking-[0.7px] text-[#FF785E] sm:text-sm',
          'cursor-pointer',
        ]"
      >
        MORE
      </a>
    </div>
  </div>
</template>
