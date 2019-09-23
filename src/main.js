import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false


const config = {
   apiKey: "AIzaSyAfllZlZx9bF6ubF8QHgXJxVrRF6WJL09Y",
    authDomain: "testing-39571.firebaseapp.com",
    databaseURL: "https://testing-39571.firebaseio.com",
    projectId: "testing-39571",
    storageBucket: "testing-39571.appspot.com",
    messagingSenderId: "1007988683941",
    appId: "1:1007988683941:web:110ad0273da0e26714094c"
}

firebase.initializeApp(config)

export const db = firebase.firestore()

export const testExport = "ovo je ribas"

// console.log(db)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
