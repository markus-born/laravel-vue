<template>
<div class="sidebar-prodavac">
    <div class="sidebar-header">
        <p>Prodavac</p>
    </div>

    <div class="sidebar-content">

        <div class="sidebar-user clearfix">
            <div class="sidebar-user-img">
                <i class="ico-user-avatar-musko ico"></i>
            </div>
            <div class="sidebar-user-status">
                <span class="user-online-status offline"></span>
                <p class="sidebar-user-status-name">Marko (username123)</p>
                <div class="sidebar-user-verifikacija">
                    <div class="sidebar-user-verifikacija-item is-verifikovana">
                        <i class="ico-user-verifikacija-mobilnog ico"></i>
                        <p>verifikovan telefon</p>
                    </div>
                    <div class="sidebar-user-verifikacija-item">
                        <i class="ico-user-verifikacija-email ico"></i>
                        <p>verifikovan telefon</p>
                    </div>
                    <div class="sidebar-user-verifikacija-item">
                        <i class="ico-user-verifikacija-lokacije ico"></i>
                        <p>verifikovan telefon</p>
                    </div>
                </div>
            </div>
            <!-- end of sidebar-user-status -->

            <div class="sidebar-user-ostalo sidebar-user-profile-items">
                <div class="sidebar-user-ostalo-item active">
                    <a href="#">
                        <i class="ico-moj-profil ico"></i>
                        <p>Moj Profil</p>
                    </a>
                </div>
                <div class="sidebar-user-ostalo-item">
                    <a href="#">
                        <i class="ico-moji-oglasi ico"></i>
                        <p>Moji oglasi <span>[ 0 aktivnih ]</span></p>
                    </a>
                </div>
                <div class="sidebar-user-ostalo-item">
                    <a href="#">
                        <i class="ico-user-poruke ico"></i>
                        <p>Moje poruke <span>[ 0 ]</span></p>
                    </a>
                </div>
                <div class="sidebar-user-ostalo-item">
                    <a href="#">
                        <i class="ico-user-javna-pitanja ico"></i>
                        <p>Javna pitanja <span>[ 0 ]</span></p>
                    </a>
                </div>
                <div class="sidebar-user-ostalo-item">
                    <a href="#">
                        <i class="ico-user-sacuvaj-oglas ico"></i>
                        <p>Sačuvani oglasi <span>[ 0 ]</span></p>
                    </a>
                </div>
                <div class="sidebar-user-ostalo-item">
                    <a href="#">
                        <i class="ico-user-sacuvaj-korisnika ico"></i>
                        <p>Sačuvani profili <span>[ 0 ]</span></p>
                    </a>
                </div>
                <div class="sidebar-user-ostalo-item">
                    <a @click="odjaviMe()">
                        <i class="ico-izloguj-se ico"></i>
                        <p>Izloguj se</p>
                    </a>
                </div>

            </div>
            <!-- end of sidebar-user-ostalo -->

        </div>
        <!-- end of sidebar-user -->


    </div>
    <!-- end of sidebar-content -->

</div>
<!-- end of sidebar-prodavac -->
</template>

<script>
    export default {
        methods: {
            odjaviMe() {
                this.$store.dispatch("logout", this.user).then(data=>{
                    this.$router.push("/");                                    
                });
                
            },
        }
    }
</script>

<style></style>