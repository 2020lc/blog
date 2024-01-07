import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// ui
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 粒子效果
import Particles from '@tsparticles/vue3';
import { loadSlim } from '@tsparticles/slim';
import { Engine } from '@tsparticles/engine';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(Particles, {
  init: async (engine: Engine) => {
    await loadSlim(engine);
  },
});

app.mount('#app');
