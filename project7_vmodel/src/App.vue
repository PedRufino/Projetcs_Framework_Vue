<script>
import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
import logo from './assets/logo.svg'
export default {
  name: 'App',
  components: {
    Cabecalho,
    Rodape
  },
  data() {
    return {
      msg: '',
      logo:logo
    }
  }
}
</script>

<template>
  <main class="w-100 row">
    <header class="col-lg-12">
      <Cabecalho :logo="logo" titulo="Cabeçalho usando pros"/>
    </header>
    <section class="col-lg-12 container-fluid"><input id="txt" v-model="msg" placeholder="Comece a digitar"
        class="form-control">
      <p>A mensagem é: {{ msg }}</p><span v-pre>{{ msg }}</span>
    </section>
  </main>
  <Rodape etec="Dep. Salim Sedeh" curso="Desenvolvimento de Sistema"/>
</template>

<style>
  #app {
  max-width: 2000px !important;
  width: 100% !important;
  padding: 0;
  margin: 0;
  height: 600px;
  text-align: center;
  grid-template-columns: 1fr !important;
}</style>
