<script>
  import { defineComponent } from 'vue'
  import Cabecalho from './components/Cabecalho.vue'
  import Carousel from './components/Carousel.vue'
  import Contato from './components/Contato.vue'
  import Rodape from './components/Rodape.vue'

  export default defineComponent({
    name: 'App',
    components:{
      Cabecalho,
      Carousel,
      Contato,
      Rodape
    }
  })
</script>

<template>
  <main class="w-100 row m-0 p-0">
    <header class="container-fluid col-lg-12 p-0 m-0">
      <div class="spacing"></div>
      <div class="container-fluid w-100">
        <Cabecalho/>
      </div>

      <div class="container-fluid w-100" style="padding: 0;">
        <Carousel/>
      </div>
    </header>
    <section>
      <div class="container-fluid w-100">
        <Contato/>
      </div>
    </section>
  </main>
  <Rodape/>
</template>

<style>
  #app{
    max-width: 2000px !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 auto !important;
    height: 600px;
    grid-template-columns: 1fr !important;
    position: absolute;
    top: 0;
  }
  .spacing{
    margin-top: 84px;
  }
  body{
    background-color: #cbccf793 !important;
    background-image: url(https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/01/fundo-transparente-png16.png?resize=696%2C696&ssl=1) !important;
    background-repeat: repeat;
    text-align: center;
    width: 100%;
  }
</style>