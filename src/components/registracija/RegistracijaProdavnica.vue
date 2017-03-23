<template>

    <div class="main">
      <div class="registracija-header">
        <p>Registracija korisnika - popunjavanje podataka</p>
      </div>

      <div class="registracija-content">

        <div class="registracija-profila-tabovi">
          <div class="registracija-profila-tabovi-item">
            <a href="#">
              <i class="ico-registracija-korisnik ico"></i>
              <p>Korisnik</p>
            </a>
          </div>
          <div class="registracija-profila-tabovi-item active">
            <a href="#">
              <i class="ico-registracija-prodavnica ico"></i>
              <p>Prodavnica</p>
            </a>
          </div>
          <div class="registracija-profila-tabovi-item">
            <a href="#">
              <i class="ico-registracija-autoplac ico"></i>
              <p>Auto plac</p>
            </a>
          </div>
          <div class="registracija-profila-tabovi-item">
            <a href="#">
              <i class="ico-registracija-autosalon ico"></i>
              <p>Auto salon</p>
            </a>
          </div>
          <div class="registracija-profila-tabovi-item">
            <a href="#">
              <i class="ico-registracija-autootpad ico"></i>
              <p>Auto otpad</p>
            </a>
          </div>
          <div class="registracija-profila-tabovi-item">
            <a href="#">
              <i class="ico-registracija-adresar-usluga ico"></i>
              <p>Adresar</p>
            </a>
          </div>
        </div> <!-- end of registracija-profila-tabovi -->

        

        <div class="registracija-content-form">

          <div class="registracija-content-heading">
            <p class="heading">Registracija - Prodavnica</p>
            <p>Komercijalni profil idealan za sva pravna i fizička lica koja se bave trgovinom.</p>
          </div>

          <div class="registracija-table">
            <table class="tabela-izabrano">
              <tr>
                <th>Izaberite paket</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>XXL</th>
              </tr>
              <tr>
                <td>Broj vidljivih <strong>aktivnih</strong> oglasa na sajtu</td>
                <td>25</td>
                <td>50</td>
                <td>100</td>
                <td>250</td>
                <td>500</td>
              </tr>
              <tr>
                <td>Listing u kategoriji <strong>prodavnice</strong></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
              </tr>
              <tr>
                <td><strong>Pretraga</strong> unutar prodavnice</td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
              </tr>
              <tr>
                <td><span class="pro"></pro> oznaka prodavnice</td>
                <td><i class="ico-nema ico"></i></td>
                <td><i class="ico-nema ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>              
			  </tr><tr>
                <td>Izdvojena prodavnicama na <strong>naslovnoj</strong></td>
                <td><i class="ico-nema ico"></i></td>
                <td><i class="ico-nema ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>
                <td><i class="ico-ima ico"></i></td>              
			  </tr><tr>
                <td>Broj gratis <strong>plaćenih</strong> oglasa mjesečno</td>
                <td>0</td>
                <td>2</td>
                <td>4</td>
                <td>6</td>
                <td>8</td>              
			  </tr><tr>
                <td>Vrijednost Gratis <strong>plaćenih</strong> oglasa</td>
                <td>0 Eura</td>
                <td>10 Eura</td>
                <td>20 Eura</td>
                <td>30 Eura</td>
                <td>40 Eura</td>
              </tr><tr>
                <td><strong>Cijena paketa 30 dana</strong></td>
                <td>25 Eura</td>
                <td>35 Eura</td>
                <td>50 Eura</td>
                <td>75 Eura</td>
                <td>100 Eura</td>
              </tr><tr>
                <td><strong>Cijena paketa 6 mjeseci - <span class="popust-highlight-10">10% POPUSTA</span></strong></td>
                <td>135 Eura</td>
                <td>189 Eura</td>
                <td>270 Eura</td>
                <td>405 Eura</td>
                <td>540 Eura</td>
			  </tr><tr>
                <td><strong>Cijena paketa 12 mjeseci - <span class="popust-highlight-20">20% POPUSTA</span></strong></td>
                <td>240 Eura</td>
                <td>336 Eura</td>
                <td>480 Eura</td>
                <td>720 Eura</td>
                <td>1000 Eura</td>
              </tr>
              <tr>
                <td><strong>Označite paket koji vam  odgovara</strong></td>
                <td><a href="#">Izaberi</a></td>
                <td><a href="#">Izaberi</a></td>
                <td class="izabran-paket"><a href="#">Izabrano</a></td>
                <td><a href="#">Izaberi</a></td>
                <td><a href="#">Izaberi</a></td>
              </tr>
            </table>

            <p>- Cijene su izražene bez <strong>PDV</strong>-a</p>
          </div>

          <form class="registracija-korisnik-form" action="">

            <div class="form-ime-prezime">
              <div class="form-group">
                <label for="ime">Ime prodavnice <span class="required">*</span></label>
                <input type="text" id="ime">
              </div>
              <div class="form-group">
                <a class="dodaj-logo" href="#"><i class="ico-tab-fotografije ico"></i>Dodaj logo</a>
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
                <input type="email" id="email">
              </div>
            </div>

            <div class="info-polje info-email">
              <p class="heading">Email</p>
              <p>Email polje nije obavezno, ali omugućava vam da kroz sajt primate poruke direktno na vaš email. Pošto unesete validnu email adresu, potrebno je odraditi verifikaciju klikom na link koji budete dobili sa našeg emaila verifikacija@fontel.me</p>
            </div>

            <div class="form-sifra">
              <div class="form-group">
                <label for="sifra">Šifra <span class="required">*</span></label>
                <input type="password" id="sifra">
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

            <button class="form-submit-btn" type="submit">Registruj se</button>
            <p class="btn-submit-lead">Klikom na dugme REGISTRUJ SE prihvatate <a href="#">uslove korišćenja</a> portala FonTel.me</p>

          </form> <!-- end of registracija-korisnik-form -->
          
        </div> <!-- end of registracija-content-form -->
        

      </div> <!-- end of registracija-content -->

    </div> <!-- end of main -->


</template>

<script>
export default {
    
}
</script>

<style class="scoped"></style>