import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
//import * as firebase from 'firebase'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyCBJEeE3O7y6u8E9-17jSXU4FMZd0wRrL4",
//   authDomain: "shaberi-56fb1.firebaseapp.com",
//   databaseURL: "https://shaberi-56fb1.firebaseio.com",
//   projectId: "shaberi-56fb1",
//   storageBucket: "shaberi-56fb1.appspot.com",
//   messagingSenderId: "16009985623",
//   appId: "1:16009985623:web:a2477da5fa14940018ed12",
//   measurementId: "G-4EKZJV3Y6K"
// };

// firebase.initializeApp(firebaseConfig);

