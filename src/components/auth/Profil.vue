<template>
<main>
  <div class="main">
    <div class="registracija-header">
      <p>Korisnički profil</p>
    </div>

    <div class="registracija-content">

      <div class="registracija-content-form korisnicki-profil">

        <div class="registracija-content-heading">
          <p class="heading">Dobrodošli u Korisnički profil</p>
          <p>Čestitamo! Uspješno ste registrovani. Savjetujemo da dodatno popunite vaš profil, kako bi uživali sve benefite
            koje sajt pruža.</p>
        </div>

        <form class="registracija-korisnik-form" action="">

          <div class="form-ime-prezime">
            <div class="form-group">
              <label for="ime">Ime <span class="required">*</span></label>
              <input type="text" id="ime">
            </div>
            <div class="form-group">
              <label for="prezime">Prezime</label>
              <input type="text" id="prezime">
            </div>
          </div>

          <div class="info-polje info-ime">
            <p class="heading">Ime</p>
            <p>Ime je obavezno polje i potrebno je upisati svoje pravo ime.</p>
          </div>
          <div class="info-polje info-prezime">
            <p class="heading">Prezime</p>
            <p>Prezime nije obavezno polje ali ga je poželjno unijeti radi veće sigurnosti profila. Prezime nije nigdje vidljivo
              na sajtu sem u vašem panelu.</p>
          </div>

          <div class="korisnicki-profil-small-heading">
            <p>Adresa stanovanja</p>
          </div>

          <div class="form-drzava">
            <div class="form-group">
              <label for="drzava">Država <span class="required">*</span></label>
              <select name="" id="drzava">
                  <option value="">Crna Gora</option>
                  <option value="">Srbija</option>
                </select>
            </div>
            <div class="form-group">
              <label for="grad">Grad <span class="required">*</span></label>
              <select name="" id="grad">
                  <option value="1">Izaberi</option>
                  <option value="1">Podgorica</option>
                  <option value="1">Budva</option>
                </select>
            </div>

          </div>

          <div class="info-polje info-adresa-stanovanja">
            <p class="heading">Adresa stanovanja</p>
            <p>Preporučujemo svim korisnicima da verifikuju svoje mjesto stanovanja. Zbog povjerenja među korisnicima, puno
              je lakše kada trgujete s čovjekom koji je verifikovao svoju adresu.<br><strong>Vaša adresa neće biti javno prikazana.</strong></p>
          </div>
          <div class="info-polje info-drzava">
            <p class="heading">Država</p>
            <p>Izabrana država je Crna Gora jer ste na .ME domenu. Možete promijeniti državu u Srbiju, Bosnu i Hercegovinu,
              Hrvatsku i Albaniju.</p>
          </div>
          <div class="info-polje info-grad">
            <p class="heading">Grad</p>
            <p>Izaberite grad u Crnoj Gori. Obavezno polje.</p>
          </div>
          <div class="info-polje info-lokacija">
            <p class="heading">Lokacija</p>
            <p>Izabrali ste grad &lt;ime grada&gt;, izaberite u njemu lokaciju (mjesto) stanovanja. Obavezno polje.</p>
          </div>
          <div class="info-polje info-ulica">
            <p class="heading">Ulica i broj</p>
            <p>Polje nije obavezno, ali ga preporučujemo za unos, kako bi dodatno osigurali vaš profil verifikacijom adrese
              stanovanja i stekli veće povjerenje kod potencijalnih kupaca.</p>
          </div>

          <div class="info-verifikacija info-verifikacija-adresa info-verifikacija-false">
            <a href="#">Verifikuj adresu stanovanja</a>
          </div>

          <div class="form-lokacija">
            <div class="form-group">
              <label for="lokacija">Lokacija <span class="required">*</span></label>
              <select name="" id="lokacija">
                  <option value="">Izaberi</option>
                  <option value="">Crna Gora</option>
                  <option value="">Srbija</option>
                </select>
            </div>

            <div class="form-group">
              <label for="ulica">Ulica i broj</label>
              <input type="text" id="ulica">
            </div>
          </div>

          <div class="form-postanski-broj">
            <div class="form-group">
              <label for="postanski-broj">Poštanski broj</label>
              <input type="text" id="postanski-broj">
            </div>
          </div>

          <div class="korisnicki-profil-small-heading">
            <p>Kontakt podaci</p>
          </div>

          <div class="form-telefon">
            <div class="form-group">
              <label for="telefon">Telefon <span class="required">*</span></label>
              <input type="text" id="telefon">
            </div>

            <div class="form-group">
              <label for="aplikacije">Imaš Viber i WhatsApp?</label>
              <div class="select-with-checkbox">
                <label class="select-field" for="select-field"></label>
                <input type="checkbox" id="select-field">
                <div class="select-dropdown">
                  <ul>
                    <li><input type="checkbox">Viber</li>
                    <li><input type="checkbox">Whatsapp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="form-telefon">
            <div class="form-group">
              <label for="telefon2">Telefon <span class="required">*</span></label>
              <input type="text" id="telefon2">
            </div>

            <div class="form-group">
              <label for="aplikacije2">Imaš Viber i WhatsApp?</label>
              <div class="select-with-checkbox">
                <label class="select-field" for="select-field2"></label>
                <input type="checkbox" id="select-field2">
                <div class="select-dropdown">
                  <ul>
                    <li><input type="checkbox">Viber</li>
                    <li><input type="checkbox">Whatsapp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="info-polje info-telefon">
            <p class="heading">Telefon</p>
            <p>Obavezo polje. Potrebno je da unesete Vaš broj telefona u formatu 06X/XXX-XXX, na tom broju će vam stići poruka
              sa VERIFIKACIONIM KODOM kako bi potvrdili da ste vlasnik broja.</p>
          </div>
          <div class="info-polje info-aplikacije">
            <p class="heading">Viber i WhatsApp</p>
            <p>Čekirajte polje ako imate aplikaciju Viber i WhatsApp povezanu sa vašim brojem telefona koji ste prijethodno
              unijeli. Polje nije obavezno.</p>
          </div>
          <div class="info-polje info-email">
            <p class="heading">Email</p>
            <p>Email polje nije obavezno, ali omugućava vam da kroz sajt primate poruke direktno na vaš email. Pošto unesete
              validnu email adresu, potrebno je odraditi verifikaciju klikom na link koji budete dobili sa našeg emaila verifikacija@fontel.me</p>
          </div>

          <div class="info-verifikacija info-verifikacija-mobilni info-verifikacija-true">
            <p>Verifikovan mobilni broj</p>
          </div>

          <div class="info-verifikacija info-verifikacija-mobilni2 info-verifikacija-false">
            <a href="#">Verifikuj mobilni telefon</a>
          </div>

          <div class="info-verifikacija info-verifikacija-email info-verifikacija-false">
            <a href="#">Verifikuj email adresu</a>
          </div>

          <div class="form-email">
            <div class="form-group">
              <label for="email">Email <span class="required">*</span></label>
              <input type="email" id="email">
            </div>
          </div>

          <div class="korisnicki-profil-small-heading">
            <p>Dodatni podaci</p>
          </div>

          <div class="form-pol">
            <label>Pol <span class="required">*</span><span class="lead-label">(kliknite na sličicu)</span></label>
            <div class="form-group">
              <label>
                  <input class="muski-pol-radio" type="radio" name="pol" value="muski">
                  <p>Muški</p>
                </label>
            </div>
            <div class="form-group">
              <label>
                  <input class="zenski-pol-radio" type="radio" name="pol" value="zenski">
                  <p>Ženski</p>
                </label>
            </div>
          </div>

          <div class="form-datum-rodjenja">
            <label for="">Datum rođenja</label>
            <select name="" id="aplikacije2">
                <option value="">Dan</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
                <option value="">13</option>
                <option value="">14</option>
                <option value="">15</option>
                <option value="">16</option>
                <option value="">17</option>
                <option value="">18</option>
                <option value="">19</option>
                <option value="">20</option>
                <option value="">21</option>
                <option value="">22</option>
                <option value="">23</option>
                <option value="">24</option>
                <option value="">25</option>
                <option value="">26</option>
                <option value="">27</option>
                <option value="">28</option>
                <option value="">29</option>
                <option value="">30</option>
                <option value="">31</option>
              </select>
            <select name="" id="aplikacije2">
                <option value="">Mjesec</option>
                <option value="">Januar</option>
                <option value="">Februar</option>
                <option value="">Mart</option>
                <option value="">April</option>
                <option value="">Maj</option>
                <option value="">Jun</option>
                <option value="">Jul</option>
                <option value="">Avgust</option>
                <option value="">Septembar</option>
                <option value="">Oktobar</option>
                <option value="">Novembar</option>
                <option value="">Decembar</option>
              </select>
            <select name="" id="aplikacije2">
                <option value="">Godina</option>
                <option value="">1987</option>
                <option value="">1988</option>
                <option value="">1989</option>
                <option value="">1990</option>
                <option value="">1991</option>
                <option value="">1992</option>
                <option value="">1993</option>
                <option value="">1994</option>
                <option value="">1995</option>
                <option value="">1996</option>
              </select>
          </div>

          <div class="korisnicki-profil-small-heading">
            <p>Promjena šifre</p>
          </div>

          <div class="form-sifra">
            <div class="form-group">
              <label for="sifra">Nova šifra <span class="required">*</span></label>
              <input type="password" id="sifra">
            </div>
            <div class="form-group">
              <label for="sifra-ponovo">Ponovite novu šifru <span class="required">*</span></label>
              <input type="password" id="sifra-ponovo">
            </div>
          </div>

          <div class="info-polje info-sifra">
            <p class="heading">Šifra</p>
            <p>Pažljivo unesite šifru u oba polja. Minimalan broj karaktera zašifru je 6 (šest).</p>
          </div>

          <div class="info-verifikacija info-verifikacija-sifra info-verifikacija-false">
            <a href="#">Sačuvaj novu šifru</a>
          </div>


          <div class="korisnicki-profil-small-heading">
            <p></p>
          </div>

          <button class="form-submit-btn" type="submit">Sačuvaj promjene</button>

        </form>
        <!-- end of registracija-korisnik-form -->

      </div>
      <!-- end of registracija-content-form -->


    </div>
    <!-- end of registracija-content -->

  </div>
  <!-- end of main -->






  <div class="sidebar">

    <ad-user-sidebar-menu></ad-user-sidebar-menu>

    <div class="sidebar-banner">
      <a href="#">
        <img src="http://placehold.it/300x250" alt="">
      </a>
    </div>

    <div class="kontakt">
      <div class="sidebar-header">
        <p>Podeli sa prijateljima</p>
      </div>
      <!-- end of sidebar-header -->

      <div class="sidebar-content clearfix">
        <div class="kontakt-icon kontakt-facebook">
          <a href="#">
            <i class="ico-share-facebook ico"></i>
          </a>
        </div>
        <div class="kontakt-icon kontakt-twitter">
          <a href="#">
            <i class="ico-share-twitter ico"></i>
          </a>
        </div>
        <div class="kontakt-icon kontakt-google-plus">
          <a href="#">
            <i class="ico-share-google-plus ico"></i>
          </a>
        </div>
        <div class="kontakt-icon kontakt-whatsapp">
          <a href="#">
            <i class="ico-share-whatsapp ico"></i>
          </a>
        </div>
        <div class="kontakt-icon kontakt-viber">
          <a href="#">
            <i class="ico-share-viber ico"></i>
          </a>
        </div>
        <div class="kontakt-icon kontakt-email">
          <a href="#">
            <i class="ico-share-email ico"></i>
          </a>
        </div>

      </div>
    </div>
    <!-- end of kontakt -->


  </div>
  <!-- end of sidebar -->


</main>
</template>

<script>
import UserSidebarMenu from "./UserSidebarMenu.vue";
export default {
  components: {
        adUserSidebarMenu: UserSidebarMenu
    }
}
</script>

<style class="scoped"></style>