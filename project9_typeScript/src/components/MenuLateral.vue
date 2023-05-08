<template>
    <div class="row text-center">
        <div class="col-lg-12"><img :src="logo" alt=""></div>
        <div class="col-lg-12"><h4 :nome="nome">{{nome}}</h4></div>
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