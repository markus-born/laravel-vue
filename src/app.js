import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'    
import App from './App.vue'
import store from './store'
import router from './router'
//import {authPlugin} from "./plugins/AuthPlugin.js"
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
    
// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//stavljamo Axios u pogon
Vue.use(VueAxios, axios);
Vue.axios.baseURL = "http://52.59.224.50:8080";

//Vue.use(authPlugin);

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
  router,
  store,
  ...App
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }
