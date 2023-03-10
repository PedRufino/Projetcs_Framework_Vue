<template>
    <div class="container-fluid">
        <div class="bg-info">
            {{ titulo }}
        </div>

        <nav class="navbar navbar-expand-lg navbar-light hg-light">

        </nav>
    </div>
</template>

<script>
    export default{
        name:'cabecalho',
        data(){
            return{
                titulo: 'Exemplo de Cabeçalho'
            }
        }
    }
</script>

<style scoped>

</style>