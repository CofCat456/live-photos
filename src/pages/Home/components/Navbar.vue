<script setup>
import { ref } from 'vue';

const props = defineProps(['currNav', 'changeNav']);

const navbarList = ['專案介紹', '常見問答', '目前進度', '留言'];
</script>

<template>
  <div
    :class="[
      'flex justify-center ',
      'mb-8 sm:mb-12',
      'border-b border-[#E8E8DB]',
    ]"
  >
    <ul :class="['w-full max-w-[1115px]', 'flex items-center', 'sm:mx-[-8px]']">
      <template v-for="navItem in navbarList" :key="navItem">
        <li
          :class="[
            [
              'flex-1',
              'sm:flex-none',
              'py-4 sm:mx-2 sm:py-6 sm:px-3',
              'text-center text-sm tracking-[1.75px] text-photo-secondary sm:tracking-[2px]',
              'cursor-pointer',
            ],
            currNav === navItem && 'border-b-2 border-photo-primary font-bold',
          ]"
          @click="changeNav(navItem)"
        >
          {{ navItem }}
        </li>
      </template>
    </ul>
  </div>
</template>
