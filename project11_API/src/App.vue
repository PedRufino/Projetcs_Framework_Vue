<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import DadosApi from './components/DadosApi.vue';
export default defineComponent({
  name: 'App',
  components: {DadosApi}
})

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header> -->
  <main>
    <DadosApi/>
  </main>
</template>

<style>
#app{
  max-width: 2100px !important;
  /* width: 100% !important; */
  padding: 0 !important;
  margin: 0 auto !important;
  height: 300px;
  grid-template-columns: 1fr !important;
  /* position: absolute; */
  top: 0;
  left: 0;
}
</style>
