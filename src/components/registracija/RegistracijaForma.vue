<template>

    <div class="main">
      <div class="registracija-header">
        <p>Registracija korisnika - popunjavanje podataka</p>
      </div>

      <div class="registracija-content">

        <div class="registracija-profila-tabovi">
          
            <router-link tag="div" class="registracija-profila-tabovi-item" active-class="active" :to="{name:'RegistracijaForma', params: { tipKorisnika: 0}}">
              <a>
              <i class="ico-registracija-korisnik ico"></i>
              <p>Korisnik</p>
              </a>
            </router-link>
          
            <router-link tag="div" class="registracija-profila-tabovi-item" active-class="active" :to="{name:'RegistracijaForma', params: { tipKorisnika: 1}}">
              <a><i class="ico-registracija-prodavnica ico"></i>
              <p>Prodavnica</p></a>
            </router-link>
          
            <router-link tag="div" class="registracija-profila-tabovi-item" active-class="active" :to="{name:'RegistracijaForma', params: { tipKorisnika: 2}}">
              <a><i class="ico-registracija-autoplac ico"></i>
              <p>Auto plac</p></a>
            </router-link>
          
            <router-link tag="div" class="registracija-profila-tabovi-item" active-class="active" :to="{name:'RegistracijaForma', params: { tipKorisnika: 3}}">
              <a><i class="ico-registracija-autosalon ico"></i>
              <p>Auto salon</p></a>
            </router-link>
          
            <router-link tag="div" class="registracija-profila-tabovi-item" active-class="active" :to="{name:'RegistracijaForma', params: { tipKorisnika: 4}}">
              <a><i class="ico-registracija-autootpad ico"></i>
              <p>Auto otpad</p></a>
            </router-link>
          
            <router-link tag="div" class="registracija-profila-tabovi-item" active-class="active" :to="{name:'RegistracijaForma', params: { tipKorisnika: 5}}">
              <a><i class="ico-registracija-adresar-usluga ico"></i>
              <p>Adresar</p></a>
            </router-link>
          
        </div> <!-- end of registracija-profila-tabovi -->

        

        <div class="registracija-content-form">

          <div class="registracija-content-heading">
            <p class="heading">Registracija - korisnik</p>
            <p>Običnan, nekomercijalan, besplatnan profil za sva fizička lica.</p>
          </div>
            
          <form class="registracija-korisnik-form" action="" novalidate>

            <div class="form-ime-prezime">
              <div class="form-group">
                <label for="ime">Ime <span class="required">*</span></label>
                <input type="text" v-model="regData.name" v-validate="'required'" 
                :class="{'input': true, 'is-danger': errors.has('ime') }"
                id="ime" name = "ime">
                <span v-show="errors.has('ime')" class="help is-danger">{{ errors.first('ime') }}</span>
              </div>
              <div class="form-group">
                <label for="prezime">Prezime</label>
                <input type="text" v-model="regData.surname" id="prezime">
              </div>
            </div> 

            <div class="info-polje info-ime">
              <p class="heading">Ime</p>
              <p>Ime je obavezno polje i potrebno je upisati svoje pravo ime.</p>
            </div>
            <div class="info-polje info-prezime">
              <p class="heading">Prezime</p>
              <p>Prezime nije obavezno polje ali ga je poželjno unijeti radi veće sigurnosti profila. Prezime nije nigdje vidljivo na sajtu sem u vašem panelu.</p>
            </div>

            <div class="form-pol">
              <label>Pol <span class="required">*</span><span class="lead-label">(kliknite na sličicu)</span></label>
              <div class="form-group">
                <label>
                  <input class="muski-pol-radio" type="radio" name="pol" v-model="regData.gender" value="m">
                  <p>Muški</p>
                </label>
              </div>
              <div class="form-group">
                <label>
                  <input class="zenski-pol-radio" type="radio" name="pol" v-model="regData.gender" value="f">
                  <p>Ženski</p>
                </label>
              </div>
            </div> 
            <div class="info-polje info-pol">
              <p class="heading">Pol</p>
              <p>Izaberite svoj pol klikom na sliku muškarca ili žene. Ovo polje je obavezno.</p>
            </div>


            <div class="form-drzava">
              <div class="form-group">
                <label for="drzava">Država <span class="required">*</span></label>
                <select name="" id="drzava" v-model="selCountry">
                  <option v-for="d in lovCountries" :value="d" >{{d.name}}</option>                  
                </select>
              </div>
              <div class="form-group">
                <label for="grad">Grad <span class="required">*</span></label>
                <select name="" id="grad" v-model="selCity">
                  <option v-for="g in lovCities" :value="g">{{g.name}}</option>
                </select>
              </div>
            </div>

            <div class="info-polje info-drzava">
              <p class="heading">Država</p>
              <p>Izabrana država je Crna Gora jer ste na .ME domenu. Možete promijeniti državu u Srbiju, Bosnu i Hercegovinu, Hrvatsku i Albaniju.</p>
            </div>
            <div class="info-polje info-grad">
              <p class="heading">Grad</p>
              <p>Izaberite grad u Crnoj Gori. Obavezno polje.</p>
            </div>

            <div class="form-lokacija">
              <div class="form-group">
                <label for="lokacija">Lokacija <span class="required">*</span></label>                
                <select name="" id="lokacija" v-model="selLocation">
                  <option v-for="l in lovLocations" :value="l">{{l.abr}}-{{l.name}}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="ulica">Ulica i broj</label>
                <input type="text" v-model="regData.street" id="ulica">
              </div>
            </div>

            <div class="info-polje info-lokacija">
              <p class="heading">Lokacija</p>
              <p>Izabrali ste grad &lt;ime grada&gt;, izaberite u njemu lokaciju (mjesto) stanovanja. Obavezno polje.</p>
            </div>
            <div class="info-polje info-ulica">
              <p class="heading">Ulica i broj</p>
              <p>Polje nije obavezno, ali ga preporučujemo za unos, kako bi dodatno osigurali vaš profil verifikacijom adrese stanovanja i stekli veće povjerenje kod potencijalnih kupaca.</p>
            </div>


            <div class="form-telefon">
              <div class="form-group">
                <label for="telefon">Telefon <span class="required">*</span></label>
                <input type="text" v-model="regData.phone" id="telefon">
              </div>

              <div class="form-group">
                <label for="aplikacije">Imaš Viber i WhatsApp?</label>
                <div class="select-with-checkbox">
                    <label class="select-field" for="select-field"></label>
                    <input type="checkbox" id="select-field">
                    <div class="select-dropdown">
                      <ul>
                        <li><input type="checkbox" v-model="regData.hasViber">Viber</li>
                        <li><input type="checkbox" v-model="regData.hasWhatsapp">Whatsapp</li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>

            <div class="info-polje info-telefon">
              <p class="heading">Telefon</p>
              <p>Obavezo polje. Potrebno je da unesete Vaš broj telefona u formatu 06X/XXX-XXX, na tom broju će vam stići poruka sa VERIFIKACIONIM KODOM kako bi potvrdili da ste vlasnik broja.</p>
            </div>
            <div class="info-polje info-aplikacije">
              <p class="heading">Viber i WhatsApp</p>
              <p>Čekirajte polje ako imate aplikaciju Viber i WhatsApp povezanu sa vašim brojem telefona koji ste prijethodno unijeli. Polje nije obavezno.</p>
            </div>

            <div class="form-email">
              <div class="form-group">
                <label for="email">Email <span class="required">*</span></label>
                <input type="email" v-model="email" id="email" v-validate="email" data-rules="required|email">
              </div>
            </div>

            <div class="info-polje info-email">
              <p class="heading">Email</p>
              <p>Email polje nije obavezno, ali omugućava vam da kroz sajt primate poruke direktno na vaš email. Pošto unesete validnu email adresu, potrebno je odraditi verifikaciju klikom na link koji budete dobili sa našeg emaila verifikacija@fontel.me</p>
            </div>

            <div class="form-sifra">
              <div class="form-group">
                <label for="sifra">Šifra <span class="required">*</span></label>
                <input type="password" v-model="regData.password" id="sifra">
              </div>
              <div class="form-group">
                <label for="sifra-ponovo">Ponovite šifra <span class="required">*</span></label>
                <input type="password" id="sifra-ponovo">
              </div>
            </div>

            <div class="info-polje info-sifra">
              <p class="heading">Šifra</p>
              <p>Pažljivo unesite šifru u oba polja. Minimalan broj karaktera zašifru je 6 (šest).</p>
            </div>

            <div class="sms-potvrda">
              <p class="potvrda-msg">Poslali smo vam SMS poruku sa kodom za verifikaciju. Unesite ga u polje ispod.</p>
              <input class="unesi-kod-input" type="text" v-model="regData.code" placeholder="UNESITE KOD">
              <button class="potvrdi-btn" type="button" @click="registerUser()">Potvrdi</button>
            </div>


          </form> <!-- end of registracija-korisnik-form -->
         
        </div> <!-- end of registracija-content-form -->
        
     

      </div> <!-- end of registracija-content -->

    </div> <!-- end of main -->

</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  name:"RegistrationForm",
  beforeCreate () {
    this.$store.dispatch("getCountries");  
  },
  data() {
    return {
      email: "",
      regData: {
        phone: "38761778701",
        code:"0272",  
        country: 2,  
        city:6,
        location: 4,
        name: "Fehim",
        surname:"Dervisbegovic",
        gender: "m",
        password:"Zeko123$",
        email:"fehimdervisbegovic@gmail.com",
        hasWhatsapp: 1,
        hasViber: 0,
        street: "Ulica i broj"
      },
      selCountry: {},
      selCity: {},
      selLocation: {}      
    };
  },
  computed: {
    lovCountries() {      
      return this.$store.getters.lovCountries;
    },
    lovCities() {      
      return this.$store.getters.lovCities;      
    },
    lovLocations() {      
      return this.$store.getters.lovLocations;
    }
  },
  methods: {
    registerUser() {
      console.log("Sending user registration: ");
      console.log(this.regData);
    }
  },
  watch: { 
    'selCountry': function() {
      this.regData.country = this.selCountry.id;
      this.$store.dispatch("getCities", this.selCountry.id);
    },
    'selCity': function() {      
      this.regData.city = this.selCity.id;
      this.$store.dispatch("getLocations", this.selCity.id);
    } ,
    'selLocation': function() {
      this.regData.location = this.selLocation.id;
    }
  },        
}
</script>

<style class="scoped"></style>