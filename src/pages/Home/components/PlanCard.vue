<script setup>
const props = defineProps([
  'title',
  'price',
  'imgUrl',
  'donate_count',
  'quantity',
  'text',
  'flash_sale',
]);
</script>

<template>
  <article :class="['mb-4', 'bordr-[#E8E8DB] rounded-lg border']">
    <img :src="imgUrl" :alt="title + '的照片'" class="w-full object-cover" />
    <div class="px-4">
      <div
        :class="[
          'flex justify-between',
          'mb-2 py-2',
          'border-b border-[#E8E8DB]',
          'text-sm text-photo-secondary',
        ]"
      >
        <p class="tracking-[2px]">限時優惠</p>
        <p>{{ flash_sale }}</p>
      </div>
      <h4 class="text-lg font-bold tracking-[2px] text-photo-font">
        {{ title }}
      </h4>
      <h4 class="text-2xl font-bold leading-[41px] text-photo-font">
        {{ price }}
      </h4>
      <div class="mb-2 flex">
        <div
          :class="[
            'mr-2 px-4 py-[2px]',
            'rounded bg-[#E8E8DB]',
            'text-xs font-bold text-photo-button',
          ]"
        >
          已被贊助{{ donate_count }}次
        </div>
        <div
          :class="[
            'px-4 py-[2px]',
            'rounded bg-[#858377]',
            'text-xs font-bold text-white',
          ]"
        >
          限量
          <span class="text-photo-primary">{{ quantity }}</span>
          個
        </div>
      </div>
      <p class="text-justify leading-6 tracking-[0.7px] text-photo-button">
        {{ text }}
      </p>
      <button
        :class="[
          'yellow-btn',
          'w-full',
          'block',
          'my-4 py-3',
          'rounded-[26px]',
          'text-base leading-[21px] tracking-[1.1px]',
        ]"
      >
        贊助此專案
      </button>
    </div>
  </article>
</template>
