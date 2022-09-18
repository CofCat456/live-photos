<script setup>
import { ref } from 'vue';
import Form from './Form.vue';

const props = defineProps(['formSchema', 'button_text']);

const showed = ref(false);

const open = () => {
  showed.value = true;
};

const close = () => {
  showed.value = false;
};

defineExpose({
  open,
  close,
});
</script>

<template>
  <div
    :class="[
      [
        'h-screen w-screen',
        'fixed top-0 left-0',
        'flex items-center justify-center',
        'p-5',
        'duration-300',
      ],
      showed ? 'opacity-100' : 'pointer-events-none opacity-0',
    ]"
  >
    <!-- Modal-Overlay -->
    <div
      :class="['h-full w-full', 'absolute top-0 left-0', 'bg-black/50']"
      @click="close"
    />

    <!-- Modal-Window -->
    <div
      :class="[
        [
          'w-full max-w-[500px]',
          'rounded-lg border-t-4 border-photo-primary bg-white',
          'overflow-hidden',
          'z-10 ',
        ],
        showed ? 'scale-100' : 'scale-0 transition-all duration-300',
      ]"
    >
      <div
        :class="[
          'flex items-center justify-between',
          'border-b border-[#DEE2E6] p-4',
        ]"
      >
        <h2 class="text-2xl font-bold text-photo-font2">
          <slot name="modalTitle">Modal</slot>
        </h2>

        <!-- 關閉叉叉 -->
        <div
          :class="[
            'h-8 w-8',
            'p-1',
            'rounded-md hover:bg-gray-200 ',
            'duration-100 active:scale-90',
            'cursor-pointer',
          ]"
          @click="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-full w-full text-black/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <div class="mt-[25px] w-full px-4">
        <div class="mb-12 w-full">
          <Form
            :formSchema="formSchema"
            button_width="full"
            :button_text="button_text"
          />
        </div>
        <slot name="modalFotter" />
      </div>
    </div>
  </div>
</template>
