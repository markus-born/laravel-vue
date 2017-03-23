<template>    
    <div class="main">

      <div class="registracija-header">
        <p>Registracija korisnika</p>
      </div>

      <div class="registracija-content">

        <div class="registracija-content-upper">
          <p class="heading">Izaberite vrstu korisničkog profila</p>
          <p class="lead">Na FonTel sajtu postoje 4 vrste korisničkih profila, izaberite onaj koji najbolje odgovara vašim potrebama i vašem poslovanju.</p>
        </div>

        <div class="registracija-item">
          <router-link :to="{name:'RegistracijaForma', params: { tipKorisnika: 0}}">
            <i class="ico-registracija-korisnik ico"></i>
            <p class="heading">Korisnik</p>
            <p class="lead">Običnan, nekomercijalan, besplatnan profil za sva fizička lica.</p>
          </router-link>
        </div>
        <div class="registracija-item">
          <router-link :to="{name:'RegistracijaForma', params: { tipKorisnika: 1}}">
            <i class="ico-registracija-prodavnica ico"></i>
            <p class="heading">Prodavnica</p>
            <p class="lead">Komercijalni profil idealan za sva pravna i fizička lica koja se bave trgovinom.</p>
          </router-link>
        </div>
        <div class="registracija-item">
          <router-link :to="{name:'RegistracijaForma', params: { tipKorisnika: 2}}">
            <i class="ico-registracija-autoplac ico"></i>
            <p class="heading">Auto plac</p>
            <p class="lead">Profil za operatere mobilne i fiksne telefonije, internet operatere, kao i operatere tv i kablovske mreže.</p>
          </router-link>
        </div>
        <div class="registracija-item">
          <router-link :to="{name:'RegistracijaForma', params: { tipKorisnika: 3}}">
            <i class="ico-registracija-autosalon ico"></i>
            <p class="heading">Auto salon</p>
            <p class="lead">Profil za operatere mobilne i fiksne telefonije, internet operatere, kao i operatere tv i kablovske mreže.</p>
          </router-link>
        </div>
        <div class="registracija-item">
          <router-link :to="{name:'RegistracijaForma' , params: { tipKorisnika: 4}}">
            <i class="ico-registracija-autootpad ico"></i>
            <p class="heading">Autootpad</p>
            <p class="lead">Profil za operatere mobilne i fiksne telefonije, internet operatere, kao i operatere tv i kablovske mreže.</p>
          </router-link>
        </div>
        <div class="registracija-item">
          <router-link :to="{name:'RegistracijaForma', params: { tipKorisnika: 5}}">
            <i class="ico-registracija-adresar-usluga ico"></i>
            <p class="heading">Adresar</p>
            <p class="lead">Profil za sva pravna i fizička lica koja žele svoje usluge prezentovati na sajtu.</p>
          </router-link>
        </div>

      </div> <!-- end of registracija-content -->

    </div> <!-- end of main -->
</template>

<script>

export default {    
    components: {
    }
}
</script>

<style></style>