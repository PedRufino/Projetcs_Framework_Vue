<script lang="ts">
  import { defineComponent } from 'vue';
  import Tarefas from './components/Tarefas.vue';

  export default defineComponent({
      name: "App",
      components: {Tarefas}
  })
</script>

<template>
  <main class="row">
    <div class="col-lg-2 bg-info">

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
</style>
