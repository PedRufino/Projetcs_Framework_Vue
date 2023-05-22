<template>
    <div class="row text-center">
        <div class="col-lg-12"><div class="logo-size"></div></div>
        <div class="col-lg-12"><h4 class="title-nome" :nome="nome">{{nome}}</h4></div>
        <div class="col-lg-12">
            <button class="btn btn-outline-secondary" @click="trocarTema">
                {{ rotuloBtn }}
            </button>
        </div>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:'MenuLateral',
        props:['logo','nome'],
        emits:['eTrocarTema'],
        data(){
            return{
                modoNoturno: false,
            }
        },
        computed:{
            rotuloBtn(){
                if(this.modoNoturno){
                    return 'Modo Padrão'
                }
                return 'Modo Noturno'
            }
        },
        methods:{
            trocarTema(){
                this.modoNoturno = !this.modoNoturno //true
                this.$emit('eTrocarTema', this.modoNoturno)
            }
        }
    })

</script>

<style>
.logo-size{
    display: inline-block;
    width: 200px;
    height: 200px;
    background-image: var(--img-menu);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    vertical-align: middle;
}

.title-nome{
    text-align: center;
    color: var(--texto-padrao);
}
</style>