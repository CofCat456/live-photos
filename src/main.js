import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/global/fontawsome';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
