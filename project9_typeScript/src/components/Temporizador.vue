<template>
    <div class="m-flex-etec center-etec aling-items-sm-center">
        <div class="btn-sm m1">
            <Crono :tempo_seg="tempo_seg"/>
            <!-- {{ tempo_seg }} -->
        </div>
        <div class="mx-auto">
            <button class="btn btn-success btn-sm m-1" @click="iniciar" :disabled="timerAtivo">
                <span class="span-m">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                    </svg>
                </span>
                <span>Iniciar</span>
            </button>
            <button class="btn btn-danger btn-sm m-1" @click="parar" :disabled="!timerAtivo">
                <span class="span-m">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
                    </svg>
                </span>
                <span>Parar</span>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Crono from "./Crono.vue";
export default defineComponent({
    name: 'Temporizador',
    emits: ['TimerFinalizado'],
    data(){
        return{
            tempo_seg: 0,
            timer: 0,
            timerAtivo: false
        }
    },
    methods:{
        iniciar(){
            //contador (1000ms referente a 1 segundo)
            this.timer = setInterval(()=>{
                // console.log('<= Contador')
                this.tempo_seg += 1
            },1000)
            // console.log('Botão Iniciar Clicado');
            this.timerAtivo = true
        },
        parar(){
            // console.log('Botão Parar Clicado');
            clearInterval(this.timer);
            this.timerAtivo = false
            this.$emit('TimerFinalizado', this.tempo_seg)
            this.tempo_seg = 0
        }
    },
    components: { Crono }

})
</script>

<style>
    .span-m{
        margin-right: 10px;
    }

    .m-flex-etec{
        display: flex !important;
    }

    .row{
        margin-right: 0 !important;
        width: unset !important;
    }

    .row > *{
        padding-right: 0 !important;
    }

    @media only screen and (max-width: 990px) {
        .center-etec{
            text-align: center;
        }

        .m-flex-etec{
            display: block !important;
        }

        .row > *{
            width: 100% !important;
        }

        .row{
            --bs-gutter-x: 0 !important;
        }
    }

</style>