<template>
    <div class="row text-center">
        <div class="col-lg-12"><img class="logo-size" :src="logo" alt=""></div>
        <div class="col-lg-12"><h4 class="title-nome" :nome="nome">{{nome}}</h4></div>
        <div class="col-lg-12">
            <button class="btn btn-outline-secondary">
                Modo Noturno
            </button>
        </div>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:'MenuLateral',
        props:['logo','nome'],
    })

</script>

<style>
.logo-size{
width: 200px;
}

.title-nome{
text-align: center;
}
</style>