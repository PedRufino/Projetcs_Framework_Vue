<template>
    <div class="card my-1">
        <div class="card-body">
            <div class="row">
                <div class="col-lg-10"><small>Descriçao</small></div>
                <div class="col-lg-2"><small><Crono :tempo_seg="30" /></small></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Crono from './Crono.vue'
export default defineComponent({
    name: 'TarefaN',
    components: {Crono}
})
</script>