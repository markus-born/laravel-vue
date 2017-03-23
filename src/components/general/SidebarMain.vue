<template>
<div class="sidebar">
        <div class="sidebar-banner">
          <a href="#">
            <img src="http://placehold.it/300x250" alt="">
          </a>
        </div>

        <div class="izdvojeno-iz-ponude">
          <div class="sidebar-header">
            <p>Izdvojeni prodavci djelova i opreme</p>
          </div>
          <div class="sidebar-content">
            <div class="sidebar-info">
              <p>Za pomoć i sve informacije oko otvaranja prodavnice pozovite na 067/123-123</p>
              <i class="ico-telefonska-podrska ico"></i>
            </div>

            <div class="sidebar-items">
            
              <ad-sidebar-item v-for="sb in 7"></ad-sidebar-item>

            </div> <!-- end of sidebar items -->

            <div class="sidebar-item-footer">
              <div class="sidebar-footer-bg">
                <a href="#">Prodavnice</a>
                <a href="#">Auto otpadi</a>
              </div>
            </div> <!-- end of sidebar-item footer -->

          </div> <!-- end of sidebar content -->

        </div> <!-- end of izdvojene prodavnice -->

        <div class="sidebar-banner">
          <a href="#">
            <img src="http://placehold.it/300x250" alt="">
          </a>
        </div>

        <div class="izdvojeno-iz-ponude">
          <div class="sidebar-header">
            <p>Izdvojeni prodavci vozila</p>
          </div>
          <div class="sidebar-content">
            <div class="sidebar-info">
              <p>Za pomoć i sve informacije oko otvaranja auto placa pozovite na 067/123-123</p>
              <i class="ico-telefonska-podrska ico"></i>
            </div>

            <div class="sidebar-items">
            
              <div class="sidebar-item">
                <a href="#">
                  <img src="http://placehold.it/272x76" alt="">
                </a>
              </div> <!-- end of sidebar item -->
            
              <div class="sidebar-item">
                <a href="#">
                  <img src="http://placehold.it/272x76" alt="">
                </a>
              </div> <!-- end of sidebar item -->
            
              <div class="sidebar-item">
                <a href="#">
                  <img src="http://placehold.it/272x76" alt="">
                </a>
              </div> <!-- end of sidebar item -->
            
              <div class="sidebar-item">
                <a href="#">
                  <img src="http://placehold.it/272x76" alt="">
                </a>
              </div> <!-- end of sidebar item -->
            
              <div class="sidebar-item">
                <a href="#">
                  <img src="http://placehold.it/272x76" alt="">
                </a>
              </div> <!-- end of sidebar item -->
            
              <div class="sidebar-item">
                <a href="#">
                  <img src="http://placehold.it/272x76" alt="">
                </a>
              </div> <!-- end of sidebar item -->
            
              <div class="sidebar-item">
                <a href="#">
                  <img src="http://placehold.it/272x76" alt="">
                </a>
              </div> <!-- end of sidebar item -->
          
          

            </div> <!-- end of sidebar items -->

            <div class="sidebar-item-footer">
              <div class="sidebar-footer-bg">
                <a href="#">Auto placevi</a>
                <a href="#">Auto saloni</a>
              </div>
            </div> <!-- end of sidebar-item footer -->

          </div> <!-- end of sidebar content -->

        </div> <!-- end of izdvojene prodavnice -->


        <div class="sms-oglasi">
          <div class="sidebar-header">
            <p>Poslednji SMS oglasi</p>
          </div> <!-- end of sidebar-header -->

          <div class="sidebar-content">
            <div class="sidebar-info">
              <p>Vaše SMS oglase šaljite na 067/313-555 Istaknite vaš SMS oglas kao <span class="star">&#9733;</span>PREMIUM<span class="star">&#9733;</span> po cijeni od 30€ mjesečno. Info 067/733-941</p>
            </div> <!-- end of sidebar-info -->

            <div class="sms-items">

              <div class="sms-item">

                <div class="sms-content">
                  <div class="sms-content-img">
                    <i class="ico-kategorije-automobili ico"></i>
                  </div> <!-- end of sms-img -->

                  <div class="sms-content-text">
                    <p><span class="star">&#9733;</span>PREMIUM<span class="star">&#9733;</span> Vršimo otkup svih motornih vozila, nebitna marka i model. Dolazak i isplata na licu mjesta. Ponude možete slati i na viber. 068/701-704</p>
                  </div> <!-- end of sms-text -->
                  
                  <div class="sms-item-footer">
                    <div class="sms-item-footer-tel">
                      <p>Tel. 067/159-159</p>
                    </div>
                    <div class="sms-item-footer-date">
                      <p>25.10.2015</p>
                    </div>
                  </div> <!-- end of sms-item-footer -->

                </div> <!-- end of sms-content -->
              </div> <!-- end of sms-item -->

              <div class="sms-item">

                <div class="sms-content">
                  <div class="sms-content-img">
                    <i class="ico-kategorije-automobili ico"></i>
                  </div> <!-- end of sms-img -->

                  <div class="sms-content-text">
                    <p><span class="star">&#9733;</span>PREMIUM<span class="star">&#9733;</span> Otkup ispravnih, neispravnih i havarisanih vozila. Najbolja procjena, dolazak na lice mjesta, isplata odmah. Ponude slati i na viber</p>
                  </div> <!-- end of sms-text -->
                  
                  <div class="sms-item-footer">
                    <div class="sms-item-footer-tel">
                      <p>Tel. 067/159-159</p>
                    </div>
                    <div class="sms-item-footer-date">
                      <p>25.10.2015</p>
                    </div>
                  </div> <!-- end of sms-item-footer -->

                </div> <!-- end of sms-content -->
              </div> <!-- end of sms-item -->

              <div class="sms-item">

                <div class="sms-content">
                  <div class="sms-content-img">
                    <i class="ico-kategorije-poljoprivreda ico"></i>
                  </div> <!-- end of sms-img -->

                  <div class="sms-content-text">
                    <p>Prodajem Traktor Tomson & French sa prikolicom za skupljanje sijena. Cijena 6000€ Fiksno. Zvati isključivo do 16h</p>
                  </div> <!-- end of sms-text -->
                  
                  <div class="sms-item-footer">
                    <div class="sms-item-footer-tel">
                      <p>Tel. 067/159-159</p>
                    </div>
                    <div class="sms-item-footer-date">
                      <p>25.10.2015</p>
                    </div>
                  </div> <!-- end of sms-item-footer -->

                </div> <!-- end of sms-content -->
              </div> <!-- end of sms-item -->

              <div class="sms-item">

                <div class="sms-content">
                  <div class="sms-content-img">
                    <i class="ico-kategorije-transport ico"></i>
                  </div> <!-- end of sms-img -->

                  <div class="sms-content-text">
                    <p>Poradjem kamioni Man 136 ks kompletan. Može kompezacija za manje vozilo uz vašu doplatu. Cijena 9000€</p>
                  </div> <!-- end of sms-text -->
                  
                  <div class="sms-item-footer">
                    <div class="sms-item-footer-tel">
                      <p>Tel. 067/159-159</p>
                    </div>
                    <div class="sms-item-footer-date">
                      <p>25.10.2015</p>
                    </div>
                  </div> <!-- end of sms-item-footer -->

                </div> <!-- end of sms-content -->
              </div> <!-- end of sms-item -->

              <div class="sms-item">

                <div class="sms-content">
                  <div class="sms-content-img">
                    <i class="ico-kategorije-automobili ico"></i>
                  </div> <!-- end of sms-img -->

                  <div class="sms-content-text">
                    <p>Vršimo otkup svih motornih vozila, nebitna marka i model. Dolazak i isplata na licu mjesta. Ponude možete slati i na viber. 068/701-704</p>
                  </div> <!-- end of sms-text -->
                  
                  <div class="sms-item-footer">
                    <div class="sms-item-footer-tel">
                      <p>Tel. 067/159-159</p>
                    </div>
                    <div class="sms-item-footer-date">
                      <p>25.10.2015</p>
                    </div>
                  </div> <!-- end of sms-item-footer -->

                </div> <!-- end of sms-content -->
              </div> <!-- end of sms-item -->

            </div> <!-- end of sms-items -->

            <div class="sidebar-item-footer">
              <div class="sidebar-footer-bg">
                <a href="#">Pretraži SMS oglase</a>
              </div>
            </div> <!-- end of sidebar-item footer -->
          </div> <!-- end of sidebar-content -->
        </div> <!-- end of sms-oglasi -->

        <div class="izdvojeno-iz-ponude">
          <div class="sidebar-header">
            <p>Adresar - izdvojeno iz ponude</p>
          </div>
          <div class="sidebar-content">
            <div class="sidebar-info">
              <p>Za pomoć i sve informacije oko upisa u adresar pozovite na 067/123-123</p>
              <i class="ico-telefonska-podrska ico"></i>
            </div>

            <div class="sidebar-items">
            
              <div class="sidebar-item">
                <div class="sidebar-item-img">
                  <a href="#">
                    <img src="http://placehold.it/103x77" alt="">
                  </a>
                </div>
                <div class="sidebar-item-content">
                  <div class="sidebar-item-heading">
                    <i class="ico-adresar ico"></i>
                    <a href="#">Agencija MTL CAR</a>
                  </div>
                  <p>Podgorica</p>
                  <p>Agencija za registraciju vozila</p>
                  <p>Tel: 067/123-123</p>
                  <a class="arrow-detaljnije" href="#"><i class="ico-detaljnije ico"></i></a>
                </div>
              </div> <!-- end of sidebar item -->
          
              <div class="sidebar-item">
                <div class="sidebar-item-img">
                  <a href="#">
                    <img src="http://placehold.it/103x77" alt="">
                  </a>
                </div>
                <div class="sidebar-item-content">
                  <div class="sidebar-item-heading">
                    <i class="ico-adresar ico"></i>
                    <a href="#">Auto otpad Ivanovic</a>
                  </div>
                  <p>Podgorica</p>
                  <p>Auto otpad</p>
                  <p>Tel: 067/123-123</p>
                  <a class="arrow-detaljnije" href="#"><i class="ico-detaljnije ico"></i></a>
                </div>
              </div> <!-- end of sidebar item -->
          
              <div class="sidebar-item">
                <div class="sidebar-item-img">
                  <a href="#">
                    <img src="http://placehold.it/103x77" alt="">
                  </a>
                </div>
                <div class="sidebar-item-content">
                  <div class="sidebar-item-heading">
                    <i class="ico-adresar ico"></i>
                    <a href="#">Auto kuća Ščekić</a>
                  </div>
                  <p>Bar</p>
                  <p>Auto servis</p>
                  <p>Tel: 067/123-123</p>
                  <a class="arrow-detaljnije" href="#"><i class="ico-detaljnije ico"></i></a>
                </div>
              </div> <!-- end of sidebar item -->
          
              <div class="sidebar-item">
                <div class="sidebar-item-img">
                  <a href="#">
                    <img src="http://placehold.it/103x77" alt="">
                  </a>
                </div>
                <div class="sidebar-item-content">
                  <div class="sidebar-item-heading">
                    <i class="ico-adresar ico"></i>
                    <a href="#">Zatamnjivanje stakala</a>
                  </div>
                  <p>Bar (+3 lokacije)</p>
                  <p>Auto stakla, Auto servis...</p>
                  <p>Tel: 067/123-123</p>
                  <a class="arrow-detaljnije" href="#"><i class="ico-detaljnije ico"></i></a>
                </div>
              </div> <!-- end of sidebar item -->
          
              <div class="sidebar-item">
                <div class="sidebar-item-img">
                  <a href="#">
                    <img src="http://placehold.it/103x77" alt="">
                  </a>
                </div>
                <div class="sidebar-item-content">
                  <div class="sidebar-item-heading">
                    <i class="ico-adresar ico"></i>
                    <a href="#">Mandic Mobile</a>
                  </div>
                  <p>Podgorica</p>
                  <p>Servis mobilnih telefona</p>
                  <p>Tel: 067/123-123</p>
                  <a class="arrow-detaljnije" href="#"><i class="ico-detaljnije ico"></i></a>
                </div>
              </div> <!-- end of sidebar item -->
          
              <div class="sidebar-item">
                <div class="sidebar-item-img">
                  <a href="#">
                    <img src="http://placehold.it/103x77" alt="">
                  </a>
                </div>
                <div class="sidebar-item-content">
                  <div class="sidebar-item-heading">
                    <i class="ico-adresar ico"></i>
                    <a href="#">Mandic Mobile</a>
                  </div>
                  <p>Podgorica</p>
                  <p>Servis mobilnih telefona</p>
                  <p>Tel: 067/123-123</p>
                  <a class="arrow-detaljnije" href="#"><i class="ico-detaljnije ico"></i></a>
                </div>
              </div> <!-- end of sidebar item -->
          

            </div> <!-- end of sidebar items -->

            <div class="sidebar-item-footer">
              <div class="sidebar-footer-bg">
                <a href="#">Pretraži Auto Adresar</a>
              </div>
            </div> <!-- end of sidebar-item footer -->

          </div> <!-- end of sidebar content -->

        </div> <!-- end of izdvojene prodavnice -->

        <div class="novosti-i-saveti">
          <div class="sidebar-header">
            <p>Novosti i savjeti - autonovosti.me</p>
          </div> <!-- end of sidebar-header -->

          <div class="sidebar-content">

            <div class="sidebar-items">
            
              <div class="sidebar-item">
                <div class="novosti-i-saveti-heading">
                  <div class="date">
                    <p>24 okt</p>
                  </div>
                  <div class="heading">
                    <a href="#">
                      <p>Direktan striming sa mobilnih uređaja preko YouTube Gaming</p>
                    </a>
                  </div>
                </div>
                <div class="novosti-i-saveti-content">
                  <div class="novosti-i-saveti-content-text">
                    <p>Na konferenciji za medije Tesla Motors je najavio izdanje verzije 7.0 svog Model S softvera, velikog paketa unapređenja...</p><a href="#"><i class="ico-detaljnije ico"></i></a>
                  </div>
                  <div class="novosti-i-saveti-content-img">
                    <img src="http://placehold.it/100x75" alt="">
                  </div>
                </div>
              </div> <!-- end of sidebar-item -->
            
            
              <div class="sidebar-item">
                <div class="novosti-i-saveti-heading">
                  <div class="date">
                    <p>24 okt</p>
                  </div>
                  <div class="heading">
                    <a href="#">
                      <p>Direktan striming sa mobilnih uređaja preko YouTube Gaming</p>
                    </a>
                  </div>
                </div>
                <div class="novosti-i-saveti-content">
                  <div class="novosti-i-saveti-content-text">
                    <p>Na konferenciji za medije Tesla Motors je najavio izdanje verzije 7.0 svog Model S softvera, velikog paketa unapređenja...</p><a href="#"><i class="ico-detaljnije ico"></i></a>
                  </div>
                  <div class="novosti-i-saveti-content-img">
                    <img src="http://placehold.it/100x75" alt="">
                  </div>
                </div>
              </div> <!-- end of sidebar-item -->
            
            
              <div class="sidebar-item">
                <div class="novosti-i-saveti-heading">
                  <div class="date">
                    <p>24 okt</p>
                  </div>
                  <div class="heading">
                    <a href="#">
                      <p>Direktan striming sa mobilnih uređaja preko YouTube Gaming</p>
                    </a>
                  </div>
                </div>
                <div class="novosti-i-saveti-content">
                  <div class="novosti-i-saveti-content-text">
                    <p>Na konferenciji za medije Tesla Motors je najavio izdanje verzije 7.0 svog Model S softvera, velikog paketa unapređenja...</p><a href="#"><i class="ico-detaljnije ico"></i></a>
                  </div>
                  <div class="novosti-i-saveti-content-img">
                    <img src="http://placehold.it/100x75" alt="">
                  </div>
                </div>
              </div> <!-- end of sidebar-item -->
            
            
              <div class="sidebar-item">
                <div class="novosti-i-saveti-heading">
                  <div class="date">
                    <p>24 okt</p>
                  </div>
                  <div class="heading">
                    <a href="#">
                      <p>Direktan striming sa mobilnih uređaja preko YouTube Gaming</p>
                    </a>
                  </div>
                </div>
                <div class="novosti-i-saveti-content">
                  <div class="novosti-i-saveti-content-text">
                    <p>Na konferenciji za medije Tesla Motors je najavio izdanje verzije 7.0 svog Model S softvera, velikog paketa unapređenja...</p><a href="#"><i class="ico-detaljnije ico"></i></a>
                  </div>
                  <div class="novosti-i-saveti-content-img">
                    <img src="http://placehold.it/100x75" alt="">
                  </div>
                </div>
              </div> <!-- end of sidebar-item -->
            
            
              <div class="sidebar-item">
                <div class="novosti-i-saveti-heading">
                  <div class="date">
                    <p>24 okt</p>
                  </div>
                  <div class="heading">
                    <a href="#">
                      <p>Direktan striming sa mobilnih uređaja preko YouTube Gaming</p>
                    </a>
                  </div>
                </div>
                <div class="novosti-i-saveti-content">
                  <div class="novosti-i-saveti-content-text">
                    <p>Na konferenciji za medije Tesla Motors je najavio izdanje verzije 7.0 svog Model S softvera, velikog paketa unapređenja...</p><a href="#"><i class="ico-detaljnije ico"></i></a>
                  </div>
                  <div class="novosti-i-saveti-content-img">
                    <img src="http://placehold.it/100x75" alt="">
                  </div>
                </div>
              </div> <!-- end of sidebar-item -->
            
            
              <div class="sidebar-item">
                <div class="novosti-i-saveti-heading">
                  <div class="date">
                    <p>24 okt</p>
                  </div>
                  <div class="heading">
                    <a href="#">
                      <p>Direktan striming sa mobilnih uređaja preko YouTube Gaming</p>
                    </a>
                  </div>
                </div>
                <div class="novosti-i-saveti-content">
                  <div class="novosti-i-saveti-content-text">
                    <p>Na konferenciji za medije Tesla Motors je najavio izdanje verzije 7.0 svog Model S softvera, velikog paketa unapređenja...</p><a href="#"><i class="ico-detaljnije ico"></i></a>
                  </div>
                  <div class="novosti-i-saveti-content-img">
                    <img src="http://placehold.it/100x75" alt="">
                  </div>
                </div>
              </div> <!-- end of sidebar-item -->
            

            </div> <!-- end of sidebar-items -->

            <div class="sidebar-item-footer">
              <div class="sidebar-footer-bg">
                <a href="#">Prikaži sve novosti</a>
              </div>
            </div> <!-- end of sidebar-item footer -->
          </div> <!-- end of sidebar-content -->
        </div> <!-- end of novosti-i-saveti -->

        <div class="kontakt">
          <div class="sidebar-header">
            <p>Podeli sa prijateljima</p>
          </div> <!-- end of sidebar-header -->

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
        </div> <!-- end of kontakt -->


      </div> <!-- end of sidebar -->


</template>

<script>
    import SidebarItem from "./SidebarItem.vue";

    export default {    
    components: {
        adSidebarItem: SidebarItem
    }
}
</script>


<style></style>