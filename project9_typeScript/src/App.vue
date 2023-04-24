<script lang="ts">
  import logo from './assets/images.png'
  import { defineComponent } from 'vue';
  import Tarefas from './components/Tarefas.vue';

  export default defineComponent({
      name: "App",
      components: {Tarefas},
      data(){
        return{
          logo:logo,
          nome: "Pedro Neto"
        }
      }
  })
</script>

<template>
  <main class="row">
    <div class="col-lg-2 bg-info">
      <img class="logo-size" :src="logo" alt="imagem">
      <h4 class="title-nome">{{ nome }}</h4>
    </div>
    <div class="col-lg-10 bg-light">
      <Tarefas/>
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
