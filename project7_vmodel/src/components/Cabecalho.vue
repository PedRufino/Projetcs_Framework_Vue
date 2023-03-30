<template>
    <div class="container-fluid">
        <div class="bg-info">
            {{ titulo }}
        </div>

        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand"><img :src="logo" alt="" width="48"></a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'cabecalho',
    props:['titulo','logo'],
    data() {
        return {
            // titulo: 'Exemplo de Cabeçalho'
        }
    }
}
</script>

<style scoped></style>