<template>
    <div>
        <form class="form-control w-50" v-if="loading==false">
            <label>CEP:</label>
            <p><input class="form-control" type="text" v-model="dados.cep" v-on:keyup.enter="buscaDados(dados)"/></p>
            <label>Logradouro:</label>
            <p><input class="form-control" type="text" v-model="dados.logradouro"/></p>
            <label>Bairro:</label>
            <p><input class="form-control" type="text" v-model="dados.bairro"/></p>
            <label>Localidade:</label>
            <p><input class="form-control" type="text" v-model="dados.localidade"/></p>
            <label>UF:</label>
            <p><input class="form-control" type="text" v-model="dados.uf"/></p>
        </form>
        <img class="img-loading" src="../assets/loading.gif" width="50" v-if="loading" alt=""/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { http } from '@/servicos/config';
export default defineComponent({
    name: 'DadosApi',
    data(){
        return{
            loading: false,
            dados:{cep:'', logradouro:'', bairro:'', localidade:'', uf:''}
        }
    },
    methods:{
        async buscaDados(dados:any){
            try{
                this.loading = true;
                const response = await http.get('https://viacep.com.br/ws/'+dados.cep+'/json/');
                this.dados = response.data;
                this.loading = false;
            } catch (error) {
                this.loading = false;
                console.log(error)
            }
        }
    }
});
</script>

<style>

</style>