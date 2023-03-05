<script>
  export default {
    name: 'App',
    data() {
      return {
        nomes: [
          { 'id': 1, 'nome': 'João', 'idade':15},
          { 'id': 2, 'nome': 'Maria', 'idade':18},
          { 'id': 3, 'nome': 'José', 'idade':8},
          { 'id': 4, 'nome': 'Kalliel', 'idade':41},
          { 'id': 5, 'nome': 'Pedro', 'idade':23},
          { 'id': 6, 'nome': 'Paulo', 'idade':45},
          { 'id': 7, 'nome': 'Ana', 'idade':11},
          { 'id': 8, 'nome': 'Julia', 'idade':13},
          { 'id': 9, 'nome': 'Jaqueline', 'idade':74},
          { 'id': 10, 'nome': 'Carlos', 'idade':20},
        ],
        titulo: '<b>Lista de Nomes</b>'
      }
    }
  }
</script>

<template>
  <div>
    <h1 v-html="titulo"></h1>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NOME</th>
          <th scope="col">IDADE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(nom,index) in nomes" :key="index">
          <td>{{ nom.id }}</td>
          <td>{{ nom.nome }}</td>
          <td>{{ nom.idade }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
</style>
