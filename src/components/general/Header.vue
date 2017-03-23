<template>  
    <header>
      <div class="row">
        <div class="top-nav signed-in">
          <ul>
            <li><a href="#"><i class="ico-top-meni-google-play ico"></i>Google Play</a></li>
            <li><a href="#"><i class="ico-top-meni-apple-store ico"></i>Apple Store</a></li>
            <li><a href="#"><i class="ico-top-meni-sms-oglasi ico"></i>SMS oglasi</a></li>
            <li><a href="#"><i class="ico-top-meni-kontakt ico"></i>Kontakt</a></li>
            
            <li class="main-nav-actions" v-show="!isUserAuthenticated"><a href="#" @click="toggleLoginForm()"><i class="ico-top-meni-prijavi-se ico"></i>Prijavi se</a></li>            
            <li class="main-nav-actions last-in-nav" v-show="!isUserAuthenticated"><router-link :to="{name:'RegistracijaOdabir'}" active-class=""><i class="ico-top-meni-registruj-se ico"></i>Registruj se</router-link></li>
          
            <li class="main-nav-actions" v-show="isUserAuthenticated"><router-link :to="{path:'/profil'}"><i class="ico-top-meni-prijavi-se ico"></i>Moj profil </router-link></li>
            <li class="main-nav-actions" v-show="isUserAuthenticated"><a href="#"><i class="ico-user-poruke ico"></i>( 2 )</a></li>
            <li class="main-nav-actions  last-in-nav" v-show="isUserAuthenticated"><a href="#"><i class="ico-user-javna-pitanja ico"></i>( 0 )</a></li>

          </ul>
        </div> <!-- end of top-nav -->

        <ad-login v-if="isLoginActive"></ad-login>

      </div>

      <div class="brand-header">
        <div class="row">
          <div class="logo">
            <ul class="language">
              <li><a class="lang-mne" href="#"></a></li>
              <li><a class="lang-eng" href="#"></a></li>
              <li><a class="lang-rus" href="#"></a></li>
            </ul>
            <a href="#">
              <img src="/public/img/logo.png" alt="">
            </a>
          </div> <!-- end of logo -->
          <div class="banner">
            <a href="#">
              <img src="http://placehold.it/728x90" alt="">
            </a>
          </div> <!-- end of banner -->
        </div>
      </div> <!-- end of brand-header -->


      <div class="main-menu">
        <div class="row">
          <ul>
            <li class="active"><router-link :to="{path: '/'}" class="main-menu-btn"><i class="ico-gavni-meni-home ico"></i></router-link></li>
            <li class="kategorije-list-item"><a class="main-menu-btn" href="#">Ponuda vozila<i class="ico-gavni-meni-dropdown-strelica ico ico-sm"></i></a>
              <div class="kategorije-mega-menu">
                <div class="kategorije-menu">
                  <ul class="kategorije-menu-list">
                    <li><a class="kategorije-menu-list-item" href="#"><i class="ico-kategorije-automobili ico"></i>Automobili</a></li>
                    <li><a class="kategorije-menu-list-item" href="#"><i class="ico-kategorije-motori ico"></i>Motori i bicikli</a></li>
                    <li><a class="kategorije-menu-list-item" href="#"><i class="ico-kategorije-transport ico"></i>Transport</a></li>
                    <li><a class="kategorije-menu-list-item" href="#"><i class="ico-kategorije-poljoprivreda ico"></i>Poljoprivreda</a></li>
                  </ul>
                  <ul class="kategorije-menu-list">
                    <li><a class="kategorije-menu-list-item" href="#"><i class="ico-kategorije-radne-masine ico"></i>Radne mašine</a></li>
                    <li><a class="kategorije-menu-list-item" href="#"><i class="ico-kategorije-nautika ico"></i>Nautika</a></li>
                    <li><a class="kategorije-menu-list-item" href="#"><i class="ico-kategorije-ostale-kategorije ico"></i>Ostale kategorije</a></li>
                    <li><a class="kategorije-menu-list-item" href="#"><i class="ico-kategorije-servis-i-usluge ico"></i>Servis i usluge</a></li>
                  </ul>
                  <hr />
                  <a class="pogledaj-sve-btn" href="#"><i class="ico-gavni-meni-pogledaj-sve-kategorije ico"></i>Pogledaj sve kategorije i podkategorije</a>
                </div>

                <div class="kategorije-img">
                  <img src="http://placehold.it/280x186" alt="">
                </div>
              </div> <!-- end of kategorije mega menu -->
            </li>
            <li><a class="main-menu-btn" href="#">Prodavnice</a></li>
            <li><a class="main-menu-btn" href="#">Auto placevi</a></li>
            <li><a class="main-menu-btn" href="#">Auto saloni</a></li>
            <li><a class="main-menu-btn" href="#">Auto otpadi</a></li>
            <li><a class="main-menu-btn" href="#">Adresar</a></li>

            <li class="marketing-list-item"><a class="main-menu-btn" href="#">Osiguranje<i class="ico-gavni-meni-dropdown-strelica ico"></i></a>
              <div class="marketing-menu">
                <div class="marketing-menu-item">
                  <img src="http://placehold.it/220x135" alt="">
                  <h4>Plaćeni oglas</h4>
                  <p>Ubrzajte prodaju! Izdvojite vaš artikal na naslovnoj i vrhu kategorije ispred besplatnih oglasa</p>
                  <a class="marketing-item-btn" href="#">Pročitaj detaljnije</a>
                </div>
                <div class="marketing-menu-item">
                  <img src="http://placehold.it/220x135" alt="">
                  <h4>Prodavnice</h4>
                  <p>Izaberite odgovarajući paket sa brojem proizvoda i počnite zarađivati već danas</p>
                  <a class="marketing-item-btn" href="#">Pročitaj detaljnije</a>
                </div>
                <div class="marketing-menu-item">
                  <img src="http://placehold.it/220x135" alt="">
                  <h4>Pro adresar</h4>
                  <p>Upišite vašu uslugu u Adresar usluga i izdvojite je PRO opcijom ispred svih besplatih upisa</p>
                  <a class="marketing-item-btn" href="#">Pročitaj detaljnije</a>
                </div>
                <div class="marketing-menu-item">
                  <img src="http://placehold.it/220x135" alt="">
                  <h4>Zakup banera</h4>
                  <p>Reklamirajte brend, proizvod ili uslugu putem banera na jednom od najposjećenijih sajtova u EX-YU</p>
                  <a class="marketing-item-btn" href="#">Pročitaj detaljnije</a>
                </div>
              </div> <!-- end of marketing menu -->
            </li>
            
            <li class="marketing-list-item"><a class="main-menu-btn" href="#">Marketing<i class="ico-gavni-meni-dropdown-strelica ico"></i></a>
              <div class="marketing-menu">
                <div class="marketing-menu-item">
                  <img src="http://placehold.it/220x135" alt="">
                  <h4>Plaćeni oglas</h4>
                  <p>Ubrzajte prodaju! Izdvojite vaš artikal na naslovnoj i vrhu kategorije ispred besplatnih oglasa</p>
                  <a class="marketing-item-btn" href="#">Pročitaj detaljnije</a>
                </div>
                <div class="marketing-menu-item">
                  <img src="http://placehold.it/220x135" alt="">
                  <h4>Prodavnice</h4>
                  <p>Izaberite odgovarajući paket sa brojem proizvoda i počnite zarađivati već danas</p>
                  <a class="marketing-item-btn" href="#">Pročitaj detaljnije</a>
                </div>
                <div class="marketing-menu-item">
                  <img src="http://placehold.it/220x135" alt="">
                  <h4>Pro adresar</h4>
                  <p>Upišite vašu uslugu u Adresar usluga i izdvojite je PRO opcijom ispred svih besplatih upisa</p>
                  <a class="marketing-item-btn" href="#">Pročitaj detaljnije</a>
                </div>
                <div class="marketing-menu-item">
                  <img src="http://placehold.it/220x135" alt="">
                  <h4>Zakup banera</h4>
                  <p>Reklamirajte brend, proizvod ili uslugu putem banera na jednom od najposjećenijih sajtova u EX-YU</p>
                  <a class="marketing-item-btn" href="#">Pročitaj detaljnije</a>
                </div>
              </div> <!-- end of marketing menu -->
            </li>
            <li><a class="main-menu-btn" href="#">Dodaj oglas</a></li>
          </ul>
        </div>
      </div> <!-- end of main menu -->
    </header>
</template>

<script>
import Login from "../auth/Login.vue";
//import { authx } from "../../plugins/AuthPlugin.js";

export default {
  data() {    
    return {
    }
  },
  computed: {
    isLoginActive() {
      return this.$store.getters.showLoginForm;
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    }
  },
  methods: {
    toggleLoginForm() {
      this.$store.commit("toggleLoginForm");
    }    
  },
  components: {
    adLogin: Login,     
  }
}
</script>

<style>
</style>