<template>
    <Tarefas @SalvarLista="SalvarLista"/>

    <Card v-if="tarefaVazia" class="p-2">
        Sem Tarefas Definidas
    </Card>

    <TarefaN v-for="(itemTarefa, index) in listaTarefas" :key="index" :itemTarefa="itemTarefa"/>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Tarefas from '@/components/Tarefas.vue';
    import TarefaN from '@/components/TarefaN.vue';
    import type iTarefaN from '@/interface/iTarefaN';
    import Card from '@/components/Card.vue';


    export default defineComponent({
        name: "App",
        components: {Tarefas, TarefaN, Card},
        data(){
            return{
                listaTarefas: [] as iTarefaN[],
            }
        },
        computed:{
            tarefaVazia(): boolean{
                return this.listaTarefas.length === 0
            }
        },
        methods:{
            SalvarLista(itemtarefa:iTarefaN){
                this.listaTarefas.push(itemtarefa)
            },
        },
    })
</script>