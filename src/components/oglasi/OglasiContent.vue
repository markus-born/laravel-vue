<template>
<div class="oglasi-content">
    <div class="oglasi-content-text" v-if="getNacinPrikazaOglasa=='G'">
        <ad-oglas-item-grid v-for="oglas in 5"></ad-oglas-item-grid>
    </div>
    <!-- end of oglasi content text -->

    <div class="oglasi-content-list" v-if="getNacinPrikazaOglasa=='L'">
        <ad-oglas-item-list v-for="oglas in 5"></ad-oglas-item-list>
    </div>
    <!-- end of oglasi content list -->

</div>
<!-- end of oglasi content -->
</template>

<script>

import OglasItemGrid from "./OglasItemGrid.vue"
import OglasItemList from "./OglasItemList.vue"

import { mapGetters } from "vuex"

export default {
    props: {        
    },
    data() {
        return {            
        };
    },
    computed:{
        //...mapGetters(["getNacinPrikazaOglasa"])        
        getNacinPrikazaOglasa() {
            return this.$store.getters.getNacinPrikazaOglasa;
        }
    },
    methods: {
    },
    components: {
        adOglasItemGrid: OglasItemGrid, 
        adOglasItemList: OglasItemList,
    }
}
</script>

<style class="scoped"></style>