<template>
    <div class="card my-1">
        <div class="card-body">
            <div class="row">
                <div class="col-lg-10"><small>{{ itemTarefa.descricao || 'Tarefa sem Descrição'}}</small></div>
                <div class="col-lg-2"><small><Crono :tempo_seg="itemTarefa.duracaoEmSeg" /></small></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import Crono from './Crono.vue';
import type iTarefaN from '@/interface/iTarefaN';
export default defineComponent({
    name: 'TarefaN',
    components: {Crono},
    props:{
        itemTarefa:{
            type: Object as PropType<iTarefaN>,
            required: true
        }
    }
})
</script>