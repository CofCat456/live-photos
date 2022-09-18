<script setup>
import { ref, onMounted } from 'vue';
import { string } from 'yup';

import Modal from '@/components/Modal.vue';

const props = defineProps(['goToRegisterModal']);

const emit = defineEmits(['pushLoginModal']);

const LoginModalDom = ref(null);

let tempModal = {};

onMounted(() => {
  pushLoginModal();
});

function pushLoginModal() {
  tempModal = {
    open() {
      LoginModalDom.value?.open();
    },
    close() {
      LoginModalDom.value?.close();
    },
  };

  emit('pushLoginModal', tempModal);
}

const formSchema = {
  fields: [
    {
      label: '帳號',
      name: 'login_account',
      as: 'input',
      type: 'text',
      rules: string().required('請輸入帳號'),
    },
    {
      label: '密碼',
      name: 'login_password',
      as: 'input',
      type: 'password',
      rules: string().min(8, '密碼至少為 8 碼').required('請輸入密碼'),
    },
  ],
};
</script>

<template>
  <Modal :formSchema="formSchema" button_text="登入" ref="LoginModalDom">
    <template v-slot:modalTitle>註冊</template>
    <template v-slot:modalFotter>
      <div :class="['w-full', 'flex items-center', 'mb-6']">
        <div :class="['h-[1px] flex-1', 'bg-[#E8E8DB]']" />
        <p :class="['px-4', 'text-sm text-photo-button']">
          還沒有帳號？
          <span
            :class="['leading-5 text-photo-sp', 'cursor-pointer']"
            @click="goToRegisterModal"
          >
            註冊一個帳號
          </span>
        </p>
        <div :class="['h-[1px] flex-1', 'bg-[#E8E8DB]']" />
      </div>
    </template>
  </Modal>
</template>
