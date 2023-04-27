<template>
    <div class="row card p-1">
        <div class="col-lg-12 row">
            <div class="col-lg-8" role="form" aria-label="Formulario de Tarefas">
                <input type="text" name="" id="" class="form-control" placeholder="Tarefa"
                v-model="descricaoTarefa">
            </div>
            <!-- <div class="col-lg-1">
                0:00:00
            </div> -->
            <div class="col-lg-4 row">
                <Temporizador @TimerFinalizado="TarefaFinal"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from "./Temporizador.vue";
export default defineComponent({
    name: 'Tarefas',
    components:{ Temporizador },
    data(){
        return{
            descricaoTarefa:''
        }
    },
    methods:{
        TarefaFinal(tempoTarefa:number) : void{
            console.log('Tempo da tarefa', tempoTarefa)
            console.log('Descrição da tarefa', this.descricaoTarefa)
            this.descricaoTarefa='' //limpar a var
        }
    }
})
</script>