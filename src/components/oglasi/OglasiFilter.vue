<template>
    <div class="oglasi-filter clearfix">

        <div class="oglasi-filter-content">
            <ul>
                <li><a href="#"><i class="ico-filter-novo-u-24h ico"></i> Novo u 24h</a></li>
                <li><a href="#"><i class="ico-filter-pala-cijena ico"></i> Pala cijena</a></li>
                <li><a href="#"><i class="ico-filter-zamjena ico"></i> Zamjena</a></li>
                <li><a href="#"><i class="ico-filter-hitno ico"></i> Hitno</a></li>
            </ul>
        </div>

        <div class="oglasi-filter-grid">
            <ul>
                <li :class="{active: getNacinPrikazaOglasa=='G'}" @click="setNacinPrikazaOglasa('G')"><a href="#"><i class="ico-filter-prikaz-grid-tekst ico"></i></a><div class="tooltip">Slikovni prikaz</div></li>
                <li :class="{active: getNacinPrikazaOglasa=='L'}"><a href="#" @click="setNacinPrikazaOglasa('L')"><i class="ico-filter-prikaz-lista-ikonice ico"></i></a><div class="tooltip">Tabelarni prikaz</div></li>
                <li><a href="#" @click="testApi()"><i class="ico-filter-sacuvaj-pretragu ico"></i></a><div class="tooltip">Sačuvaj pretragu</div></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from "vuex"

    export default {                
        data () {
            return {
            };
        },
        computed: {
         //...mapGetters(["getNacinPrikazaOglasa"])        
            getNacinPrikazaOglasa() {
                return this.$store.getters.getNacinPrikazaOglasa;
            }
        },
        methods: {
            //...mapMutations(["setNacinPrikazaOglasa"])
            setNacinPrikazaOglasa(nacinPrikazivanjaOglasa) {
                this.$store.commit("setNacinPrikazaOglasa", nacinPrikazivanjaOglasa);
            }
        },        
    }
</script>

<style class="scoped"></style>