<script lang="ts">
  import logo from './assets/images.png'
  import { defineComponent } from 'vue';
  import Tarefas from './components/Tarefas.vue';
  import TarefaN from './components/TarefaN.vue';
  import type iTarefaN from './interface/iTarefaN';
  import Card from './components/Card.vue';
  import MenuLateral from './components/MenuLateral.vue';


  export default defineComponent({
      name: "App",
      components: {Tarefas, TarefaN, Card, MenuLateral},
      data(){
        return{
          logo:logo,
          nome: "Pedro Neto",
          listaTarefas: [] as iTarefaN[]
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
        }
      }
  })
</script>

<template>
  <main class="row">
    <div class="col-lg-2 bg-info">
      <MenuLateral :nome="nome" :logo="logo"/>
    </div>
    <div class="col-lg-10 bg-light">
      <Tarefas @SalvarLista="SalvarLista"/>
      <div>
        <TarefaN v-for="(itemTarefa, index) in listaTarefas" :key="index" :itemTarefa="itemTarefa"/>
      </div>
      <Card v-if="tarefaVazia" class="p-2">
        Sem Tarefas Definidas
      </Card>
    </div>
  </main>
</template>

<style>
  #app{
    max-width: 2100 !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 auto !important;
    height: 800px;
    grid-template-columns: 1fr !important;
    position: absolute;
    top: 0;
    left: 0;
  }

  .logo-size{
    width: 200px;
  }

  .title-nome{
    text-align: center;
  }
</style>
