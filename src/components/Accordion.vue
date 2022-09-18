<script setup>
import { ref } from 'vue';

const props = defineProps(['title', 'text', 'index']);

const checked = ref(false);
</script>

<template>
  <div
    :class="['w-full', 'mb-4', 'rounded border border-[#E5E5E5] shadow-photo']"
  >
    <label
      :class="[
        'py-2 px-4',
        'flex items-center',
        'border-b border-[#E5E5E5]',
        'duration-300',
        'cursor-pointer',
      ]"
    >
      <input type="checkbox" class="sr-only" v-model="checked" />
      <p
        :class="[
          'mr-4 px-[6px] py-1',
          'rounded bg-photo-primary',
          'text-base font-bold text-photo-secondary sm:text-sm',
        ]"
      >
        Q{{ index + 1 }}
      </p>
      <div class="text-sm tracking-[0.7px] text-photo-font">{{ title }}</div>
      <div
        :class="[
          'h-9 w-9',
          'flex items-center justify-center',
          'ml-auto',
          'transition-all duration-300',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          :class="[['h-5 w-5', 'duration-300'], checked && '-rotate-180']"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </label>
    <div
      :class="[
        ['overflow-hidden duration-300'],
        checked ? 'max-h-[300px]' : 'max-h-0',
      ]"
    >
      <div
        :class="[
          'py-4 pl-4 pr-4 sm:pl-16',
          'text-sm leading-[27px] tracking-[0.7px] text-photo-button',
        ]"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>
