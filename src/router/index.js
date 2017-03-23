import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import { createListView } from '../views/CreateListView'
// import ItemView from '../views/ItemView.vue'
// import UserView from '../views/UserView.vue'
import Pocetak from "../components/Pocetak.vue";
import GlavnaPloca from "../components/oglasi/GlavnaPloca.vue";
import Registracija from "../components/registracija/Registracija.vue";
import RegistracijaOdabir from "../components/registracija/RegistracijaOdabir.vue";
import RegistracijaForma from "../components/registracija/RegistracijaForma.vue";
import Profil from "../components/auth/Profil.vue";


export default new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: "/index", component: Pocetak,
      children: [
        { path: '', component: GlavnaPloca },
        { path: "/profil", component: Profil, name:"Profil" },
        { path: "/registracija", component: Registracija,
          children: [
            { path: "step1", component: RegistracijaOdabir, name:"RegistracijaOdabir" }  ,
            { path: "step2/:tipKorisnika", component: RegistracijaForma, name:"RegistracijaForma" }  ,            
            { path: "/", redirect: "step1"}
          ]
        },
      ]
    },
    
    // { path: '/new/:page(\\d+)?', component: createListView('new') },
    // { path: '/show/:page(\\d+)?', component: createListView('show') },
    // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
    // { path: '/job/:page(\\d+)?', component: createListView('job') },
    // { path: '/item/:id(\\d+)', component: ItemView },
    // { path: '/user/:id', component: UserView },
    { path: '/', redirect: '/index' }
  ]
})
