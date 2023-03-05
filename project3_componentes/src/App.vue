<script>
  import { defineComponent } from 'vue'
  import Texto from './components/Texto.vue'

  export default defineComponent({
    name:'App',
    components:{
      Texto
    }
  })
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <Texto/>
  </main>
</template>

<style>

</style>
