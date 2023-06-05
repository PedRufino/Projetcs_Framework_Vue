<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import DadosApi from '@/views/DadosApi.vue';
import Apimanga from '@/views/Apimanga.vue';
export default defineComponent({
  name: 'App',
  components: { Navbar, Apimanga, DadosApi }
})

</script>

<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style>
#app{
  max-width: 2100px !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 auto !important;
  height: 300px;
  grid-template-columns: 1fr !important;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
