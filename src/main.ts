import { createApp } from 'vue'
import './style.css';
import "@dimsog/vue-modal/dist/style.css";
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import App from './App.vue';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('bash', bash);

const app = createApp(App);
app.use(hljsVuePlugin);
app.mount('#app')
