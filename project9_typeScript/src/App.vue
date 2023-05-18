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
          listaTarefas: [] as iTarefaN[],
          modoNoturno:false,
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
        trocarTemaApp(modoNoturno: boolean){
          this.modoNoturno = modoNoturno
        }
      },
  })
</script>

<template>
  <main class="row" :class="{ 'modo-noturno':modoNoturno }">
    <div class="col-lg-2 menu-color">
      <MenuLateral @eTrocarTema="trocarTemaApp" :nome="nome" :logo="logo"/>
    </div>
    <!-- <div class="col-lg-10 bg-light"> -->
    <div class="col-lg-10 box">
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
    max-width: 2100px !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 auto !important;
    height: 930px;
    grid-template-columns: 1fr !important;
    position: absolute;
    top: 0;
    left: 0;
  }

  main{
    --bg-padrao: #F2F2F2;
    --texto-padrao: #000;
    --bg-card: #55a6b8;
    --bg-menu: #00eeff;
    --img-menu: url(../src/assets/images.png);
  }
  main.modo-noturno{
    --bg-padrao: #000028;
    --texto-padrao: #fff;
    --bg-card: #322c8e;
    --bg-menu: #1c1855;
    --img-menu: url(../src/assets/images2.png);
  }
  .box{
    background-color: var(--bg-padrao);
  }
  .menu-color{
    background-color: var(--bg-menu);
  }
</style>
