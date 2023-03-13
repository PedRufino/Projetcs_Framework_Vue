<script>
import Cabecalho from './components/Cabecalho.vue'
export default {
  name: 'App',
  components: {
    Cabecalho
  },
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<template>
  <main class="w-100 row">
    <header class="col-lg-12">
      <Cabecalho />
    </header>
    <section class="col-lg-12 container-fluid"><input id="txt" v-model="msg" placeholder="Comece a digitar"
        class="form-control">
      <p>A mensagem é: {{ msg }}</p><span v-pre>{{ msg }}</span>
    </section>
  </main>
</template>

<style>#app {
  max-width: 2000px !important;
  width: 100% !important;
  padding: 0;
  margin: 0;
  height: 600px;
  text-align: center;
  grid-template-columns: 1fr !important;
}</style>
