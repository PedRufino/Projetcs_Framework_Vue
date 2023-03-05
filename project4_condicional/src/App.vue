<script>
  import logo from './assets/logo.svg'

  export default {
    name:'App',
    data(){
      return{
        titulo:'<b>Consumindo API em PHP com vue</b>',
        mostra:true,
        nomes:[
          {'id':1, 'nome':'João'},
          {'id':2, 'nome':'Maria'},
          {'id':3, 'nome':'José'},
          {'id':4, 'nome':'Ana'}
        ],
        logo: logo
      }
    },
    methods:{
      alert(){
        alert('Você pressionou o botão!!')
      },
      alert2(){
        alert('Olaaaa!!!')
      }
    }
  }
</script>

<template>
  <div id="app">
    <img :src="logo" alt="imagem">    
    <h1>Vue JS</h1>
    <h2 v-html="titulo"></h2>
    <p v-if="true">Mostra o Texto</p>
    <p v-if="mostra">Mostra o texto com a variável</p>
    <div v-if="Math.random() > 0.5">
      Agora você me vê
    </div>
    <div v-else>
      Agora não vê
    </div>
    <h2 v-for="(nom,index) in nomes" :key="index" id="cor">
      {{ nom.id }} | {{ nom.nome }}
    </h2>
    <button v-on:click="alert">Clique Aqui</button><br>
    <button @:click="alert2">Clique Aqui</button>
  </div>
</template>

<style>
  @import './assets/base.css';

  #app{
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
  }
</style>
