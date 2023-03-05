<script>
export default {
  name: 'App',
  data() {
    return {
      nomes: [
        { 'id': 1, 'nome': 'João' },
        { 'id': 2, 'nome': 'Maria' },
        { 'id': 3, 'nome': 'José' },
        { 'id': 4, 'nome': 'Ana' }
      ],
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <table border="1">
    <tbody>
      <th>ID</th>
      <th>NOME</th>
    </tbody>
    <tr v-for="(nom, index) in nomes" :key="index">
      <td>{{ nom.id }}</td>
      <td>{{ nom.nome }}</td>
    </tr>
  </table>
</template>

<style>
table {
  width: 40%;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  background-color: #000;
  text-align: center;
}
</style>
