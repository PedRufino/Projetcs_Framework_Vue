<script>
import Cabecalho from './components/Cabecalho.vue'
  export default{
    name:'App',
    components:{
      Cabecalho
    },
    data(){
      return{
        msg: ''
      }
    }
  }
</script>

<template>
  <Cabecalho/>
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

  <input id="txt" v-model="msg" placeholder="Comece a digitar"><br/>
  <p>A mensagem é: {{ msg }}</p>
  <span v-pre="{{ msg }}"></span>
</template>

<style>

</style>
