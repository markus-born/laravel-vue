<template>
<main>
    <div class="main">

        <ad-kategorije></ad-kategorije>

        <div class="oglasi">

            <div class="oglasi-header">
                <p>Plaćeni auto oglasi Crna Gora - Izbor iz ponude</p>
            </div>

            <ad-oglasi-filter></ad-oglasi-filter>

            <ad-oglasi-content></ad-oglasi-content>

            <ad-oglasi-pagination></ad-oglasi-pagination>

        </div>
        <!-- end of oglasi -->
    </div>
    <!-- end of main div -->

    <ad-sidebar-main></ad-sidebar-main>
</main>
</template>

<script>
import OglasiContent from "./OglasiContent.vue"
import SidebarMain from "../general/SidebarMain.vue"
import Kategorije from "./Kategorije.vue"
import OglasiFilter from "./OglasiFilter.vue"
import OglasiPagination from "./OglasiPagination.vue"

export default {
    data () {
        return {
        }
    },
    methods: {
    },
    components: {
        adOglasiContent: OglasiContent,
        adSidebarMain: SidebarMain,
        adKategorije: Kategorije,
        adOglasiFilter: OglasiFilter,
        adOglasiPagination: OglasiPagination
    }    
}
</script>

<style class="scoped"></style>