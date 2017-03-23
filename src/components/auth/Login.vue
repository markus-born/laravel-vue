<template>
<div class="prijavi-se-popup">

          <div class="prijavi-se-popup-main">

            <div class="prijavi-se-popup-form">
              <p>Prijavna forma</p>
              <form action="">
                <div class="form-group">
                  <label for="">Korisničko ime <span>ili</span> broj telefona</label>
                  <i class="ico-top-meni-prijavi-se ico"></i><input type="text" v-model="user.email">
                </div>
                <div class="form-group">
                  <label for="">Šifra (lozinka)</label>
                  <i class="ico-sifra-login ico"></i><input type="password" v-model="user.password">
                </div>
                <button type="button" @click="prijaviMe()">Prijavi se</button>
              </form>
            </div>
            <div class="prijavi-se-popup-ili">
              <p>ili</p>
            </div>
            <div class="prijavi-se-popup-drustvene-mreze">
              <p>Prijavi se preko svog naloga na Facebook ili Google</p>
              <a href="#"><i class="ico-share-facebook ico"></i>Facebook login</a>
              <a href="#"><i class="ico-share-google-plus ico"></i>Google+ login</a>
            </div>
          </div> <!-- end of prijavi-se-popup-main -->

          <div class="prijavi-se-popup-registracija">
            <a href="#">
              <p>Nemaš profil? Registruj se.</p>
            </a>
          </div>

          <div class="prijavi-se-popup-registracija-footer">
            <div class="prijavi-se-popup-registracija-footer-item">
              <a href="#">
                <i class="ico-sifra-login ico"></i>
                <p>Zaboravljena šifra (lozinka)?</p>
              </a>
            </div>
            <div class="prijavi-se-popup-registracija-footer-item">
              <a href="#">
                <i class="ico-top-meni-prijavi-se ico"></i>
                <p>Zaboravljeno korisničko ime?</p>
              </a>
            </div>
            <div class="prijavi-se-popup-registracija-footer-item">
              <a href="#">
                <i class="ico-top-meni-kontakt ico ico"></i>
                <p>Potrebna pomoć? Pozovi 067/123-567</p>
              </a>
            </div>
          </div>
            
        </div> <!-- end of prijavi-se-popup -->
</template>
<script>
//import { authx } from "../../plugins/AuthPlugin.js";

export default {
    data() {
      return {
        user: {
          email: "fehimdervisbegovic@gmail.com",
          password: "Zeko123$",    
        },
      }
    },
    computed: {      
    },
    methods: {
      prijaviMe() {
        this.$store.dispatch("login", this.user);
      }
    },
    props: {}    
}
</script>