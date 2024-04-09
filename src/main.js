import { defineCustomElement } from 'vue';
import './style.css';
import App from './App.vue';

// const MyVueElement = defineCustomElement({
//   // normal Vue component options here
//   props: {},
//   emits: {},
//   template: `...`,

//   // defineCustomElement only: CSS to be injected into shadow root
//   styles: [`/* inlined css */`],
// });

// Register the custom element.
// After registration, all `<my-vue-element>` tags
// on the page will be upgraded.

const myCustomElement = defineCustomElement(App);

customElements.define('my-vue-element', myCustomElement);

// You can also programmatically instantiate the element:
// (can only be done after registration)
// document.body.appendChild(
//   new MyVueElement({
//     // initial props (optional)
//   })
// );

// createApp(App).mount('#app');
