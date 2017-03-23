<template>    
    <div class="container">

    <ad-header></ad-header>

    <router-view></router-view>

    <ad-footer></ad-footer>

    </div> <!-- end of container -->
</template>

<script>
import Header from "./general/Header.vue";
import Footer from "./general/Footer.vue";


export default {
    beforeCreate() {
        this.$store.dispatch("syncUserData");
    },
    components: {
        adHeader: Header,
        adFooter: Footer
    }
}
</script>

<style class="scoped"></style>