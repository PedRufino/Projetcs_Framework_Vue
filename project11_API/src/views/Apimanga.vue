http://127.0.0.1:8000/api/v1/?title=solo

<template>
    <div>
        <div class="form-control w-50" v-if="loading==false">
            <label>Título:</label>
            <p><input class="form-control" type="text" v-model="dados.title" v-on:keyup.enter="buscarManga(dados)"/></p>
        </div>
        <img class="img-loading" src="../assets/loading.gif" width="50" v-if="loading" alt=""/>
    </div>
    <table class="table table-dark table-striped">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">TÍTULO</th>
            <th scope="col">AUTOR</th>
            <th scope="col">ANO</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="manga in resultado" :key="manga">
            <td>{{ manga.id_manga }}</td>
            <td>{{ manga.title }}</td>
            <td>{{ manga.author }}</td>
            <td>{{ manga.release_Year }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { http } from '@/servicos/config';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Apimanga',
    data(){
        return{
            loading: false,
            dados: {title:''},
            resultado: []
        }
    },
    methods:{
        async buscarManga(dados:any){
            try{
                this.loading = true;
                const response = await http.get('http://110.110.2.123:8000/api/v1/?title='+dados.title);
                this.dados = response.data;
                this.resultado = response.data;
                console.log(response.data)
                this.loading = false;
            }catch(error){
                this.loading = false;
                console.log(error)
            }
        }
    }
});

</script>

<style>
table {
  width: 40%;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  background-color: #000;
  text-align: center;
}
</style>